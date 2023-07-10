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
        long numOfproduct = 0;
        long totalPrice = 0;
        for(ProductOrder product : products) {
        	numOfproduct += product.getQuantity();
        	totalPrice += product.getQuantity()*product.getPrice();
        }
        orderDTO.setTotalPrice(totalPrice);
        orderDTO.setNumOfProducts(numOfproduct);
        orderDTO.setProductOrders(products);
        return orderDTO;
    }
    
    @PostMapping(value = {"/create" })
    public Order create(@RequestHeader("Authorization") String authorizationHeader) {
    	Order order = new Order();
        order.setStatus("PENDING");
        String token = extractToken(authorizationHeader);
        String username = getUsernameFromToken(token);
        Map<String, String> user = new  HashMap<String, String>();
        user.put("username",username);
        long userId = userServiceClient.getUserId(user);
        order.setUserId(userId);
        order.setDateTime(new Date());
        return orderService.createOrder(order);
    }
    
    @PostMapping(value = {"/addCart" })
    public ResponseEntity<OrderDTO> addCart(@RequestBody OrderProductDTO orderProductDTO) {
    	Map<String, Long> product = new  HashMap<String, Long>();
        product.put("productId",orderProductDTO.getProductId());
        product.put("quantity",orderProductDTO.getQuantity());
        if(productServiceClient.checkQuantity(product)) {
        	ProductOrder productOrder = new ProductOrder(orderProductDTO.getOrderId(),
        												orderProductDTO.getProductId(),
        												orderProductDTO.getProductname(),
        												orderProductDTO.getImage(),
        												orderProductDTO.getQuantity(),
        												orderProductDTO.getPrice());
        	orderProductService.create(productOrder);
        	OrderDTO orderDTO = getOrder(orderProductDTO.getOrderId());
        	return new ResponseEntity<>(orderDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    	
    }
    
    @PostMapping(value = {"/updateCart" })
    public ResponseEntity<OrderDTO> updateCart(@RequestBody OrderProductDTO orderProductDTO) {
    	ProductOrder productOrder = orderProductService.getProductOrder(orderProductDTO.getOrderId(), orderProductDTO.getProductId());
    	if(productOrder != null && orderProductDTO.getQuantity() > 0) {
    		Map<String, Long> product = new  HashMap<String, Long>();
            product.put("productId",orderProductDTO.getProductId());
            product.put("quantity",orderProductDTO.getQuantity());
            if(productServiceClient.checkQuantity(product)) {
            	productOrder.setQuantity(orderProductDTO.getQuantity());
            	orderProductService.create(productOrder);
            }
    	}
    	else if(productOrder != null) {
    		orderProductService.removeProductOrder(productOrder);
    	}
    	OrderDTO orderDTO = getOrder(orderProductDTO.getOrderId());
        return new ResponseEntity<>(orderDTO, HttpStatus.CREATED);
    	
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
	        return authorizationHeader.substring(7); // Loại bỏ phần "Bearer " để chỉ lấy token
	    }
	    return null;
	}
}
