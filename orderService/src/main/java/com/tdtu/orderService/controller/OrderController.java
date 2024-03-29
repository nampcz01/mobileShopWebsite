package com.tdtu.orderService.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.orderService.dto.OrderDTO;
import com.tdtu.orderService.dto.OrderProductDTO;
import com.tdtu.orderService.model.Order;
import com.tdtu.orderService.service.OrderService;
import com.tdtu.orderService.service.PaymentServiceClient;
import com.tdtu.orderService.service.ProductServiceClient;
import com.tdtu.orderService.service.UserServiceClient;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;

import com.tdtu.orderService.service.OrderProductService;
import com.tdtu.orderService.model.ProductOrder;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	private final ProductServiceClient productServiceClient;
    private final PaymentServiceClient paymentServiceClient;
    private final UserServiceClient userServiceClient;
    public static final String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";
	
    @Autowired
    private OrderService orderService;
    
    @Autowired
    private OrderProductService orderProductService;
    
    @Autowired
    public OrderController(ProductServiceClient productServiceClient,PaymentServiceClient paymentServiceClient,
    		UserServiceClient userServiceClient) {
        this.productServiceClient = productServiceClient;
        this.paymentServiceClient = paymentServiceClient;
        this.userServiceClient = userServiceClient;
    }

    @GetMapping(value = { "", "/" })
    public Iterable<Order> getOrders() {
        return orderService.getAllOrders();
    }
    
    @GetMapping(value = { "/user/{id}" })
    public Iterable<Order> getOrdersByUserId(@PathVariable Long id) {
        return orderService.getAllOrdersByUserId(id);
    }

    @GetMapping(value = {"/{id}" })
    public OrderDTO getOrder(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setDateTime(order.getDateTime());
        orderDTO.setStatus(order.getStatus());
        orderDTO.setUserId(order.getUserId());
        
        List<ProductOrder> products = orderProductService.getProductsByOrderId(order.getId());
        List<OrderProductDTO> productDTOs = new ArrayList<OrderProductDTO>();
        long numOfproduct = 0;
        long totalPrice = 0;
        for(ProductOrder product : products) {
        	OrderProductDTO orderProductDTO = new OrderProductDTO(orderDTO.getId(),product.getOrderId(),
        			product.getProductname(),product.getImage(),product.getQuantity(),product.getPrice());
        	numOfproduct += product.getQuantity();
        	totalPrice += product.getQuantity()*product.getPrice();
        	productDTOs.add(orderProductDTO);
        }
        orderDTO.setTotalPrice(totalPrice);
        orderDTO.setNumOfProducts(numOfproduct);
        orderDTO.setProductOrders(productDTOs);
        return orderDTO;
    }
    
    @PostMapping(value = {"/create" })
    public Order create(@RequestHeader("Authorization") String authorizationHeader,@RequestBody OrderDTO orderDTO ) {
    	Order order = new Order();
        order.setStatus("PENDING");
        String token = extractToken(authorizationHeader);
        String username = getUsernameFromToken(token);
        Map<String, String> user = new  HashMap<String, String>();
        user.put("username",username);
        long userId = userServiceClient.getUserId(user);
        order.setUserId(userId);
        order.setDateTime(new Date());
        order = orderService.createOrder(order);
        order = buildOrder(userId,orderDTO,order);
        return order;
    }
    
    private Order buildOrder(Long userId, OrderDTO orderDTO,Order order) {
        List<OrderProductDTO> productOrderDtos = orderDTO.getProductOrders();
        List<ProductOrder> productOrders = new ArrayList<ProductOrder>();
        for (OrderProductDTO orderProductDto : productOrderDtos) {
            var productOrder = new ProductOrder(order.getId(),
                    orderProductDto.getProductId(),
                    orderProductDto.getProductname(),
                    orderProductDto.getImage(),
                    orderProductDto.getQuantity(),
                    orderProductDto.getPrice()
            );
            Map<String, Long> product = new  HashMap<String, Long>();
            product.put("productId",productOrder.getProductId());
            product.put("quantity",productOrder.getQuantity());
            if(productServiceClient.checkQuantity(product)) {
                productOrders.add(orderProductService.create(productOrder));
            }
            else {
            	order.setStatus("OUT_OF_STOCK");
            	break;
            }
        }
        order.setDateTime(new Date());
        return orderService.updateOrder(order);
    } 
    
    @PostMapping(value = {"/pay" })
    private OrderDTO paymentOrder(@RequestParam long orderId) {
    	OrderDTO orderDTO = getOrder(orderId);
    	Order order = orderService.getOrderById(orderId);
    	Map<String, Long> ordertmp = new  HashMap<String, Long>();
    	ordertmp.put("userId",orderDTO.getUserId());
    	ordertmp.put("amount",orderDTO.getTotalPrice());
        if(paymentServiceClient.checkBalance(ordertmp)) {
        	if(paymentServiceClient.pay(ordertmp)) {
        		order.setStatus("COMPLETE");
                orderService.updateOrder(order);
            	return getOrder(orderId);
        	}
        }
        order.setStatus("NOT_ENOUGH_FUND");
        orderService.updateOrder(order);
    	return getOrder(orderId);
    	
    }
    
    @PostMapping(value = {"/cancel" })
    private OrderDTO CancelOrder(@RequestParam long orderId) {
    	Order order = orderService.getOrderById(orderId);
        order.setStatus("CANCEL");
        orderService.updateOrder(order);
    	return getOrder(orderId);
    	
    }
    
    private static String getUsernameFromToken(String token) {
        try {
            Jwt<?, Claims> jwt = Jwts.parserBuilder()
                    .setSigningKey(SECRET)
                    .build()
                    .parse(token);
            Claims claims = jwt.getBody();
            return claims.getSubject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
	}
	
	private String extractToken(String authorizationHeader) {
	    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
	        return authorizationHeader.substring(7);
	    }
	    return null;
	}
}
