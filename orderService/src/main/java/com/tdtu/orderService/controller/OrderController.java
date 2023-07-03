package com.tdtu.orderService.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.orderService.dto.OrderDTO;
import com.tdtu.orderService.dto.OrderProductDTO;
import com.tdtu.orderService.model.Order;
import com.tdtu.orderService.service.OrderService;
import com.tdtu.orderService.service.PaymentServiceClient;
import com.tdtu.orderService.service.ProductServiceClient;
import com.tdtu.orderService.service.OrderProductService;
import com.tdtu.orderService.model.ProductOrder;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	private final ProductServiceClient productServiceClient;
    private final PaymentServiceClient paymentServiceClient;
	
    @Autowired
    private OrderService orderService;
    
    @Autowired
    private OrderProductService orderProductService;
    
    @Autowired
    public OrderController(ProductServiceClient productServiceClient,PaymentServiceClient paymentServiceClient) {
        this.productServiceClient = productServiceClient;
        this.paymentServiceClient = paymentServiceClient;
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
    public Order getOrder(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    private Order buildOrder(Long userId, OrderDTO orderDTO) {
        List<OrderProductDTO> productOrderDtos = orderDTO.getProductOrders();
        Order order = new Order();
        order.setStatus("PENDING");
        order.setUserId(userId);
        order = orderService.createOrder(order);
        long totalPrice = 0;
        long numOfProducts = 0;
        List<ProductOrder> productOrders = new ArrayList<ProductOrder>();
        for (OrderProductDTO orderProductDto : productOrderDtos) {
            var productOrder = new ProductOrder(order.getId(),
                    orderProductDto.getProductId(),
                    orderProductDto.getQuantity(),
                    orderProductDto.getPrice()
            );
            Map<String, Long> product = new  HashMap<String, Long>();
            product.put("productId",productOrder.getProductId());
            product.put("quantity",productOrder.getQuantity());
            if(productServiceClient.checkQuantity(product)) {
            	totalPrice += orderProductDto.getPrice() * orderProductDto.getQuantity();
                numOfProducts += orderProductDto.getQuantity();
                productOrders.add(orderProductService.create(productOrder));
            }
            else {
            	order.setStatus("OUT_OF_STOCK");
            	break;
            }
        }
        order.setTotalPrice(totalPrice);
        order.setDateTime(new Date());
        order.setNumOfProducts(numOfProducts);
        return orderService.updateOrder(order);

    }
    
    @PostMapping(value = {"/create/{id}" })
    public Order create(@PathVariable Long id, @RequestBody OrderDTO orderDTO) {
        Order order = buildOrder(id, orderDTO);
        if("OUT_OF_STOCK".equals(order.getStatus())) {
        	return order;
        }else{
        	order = paymentOrder(id, order);
        	order.setStatus("COMPLETE");
        	return order;
        }   
    }
    
    private Order paymentOrder(long userId,Order order) {
    	
    	Map<String, Long> ordertmp = new  HashMap<String, Long>();
    	ordertmp.put("userId",order.getUserId());
    	ordertmp.put("amount",order.getTotalPrice());
        if(paymentServiceClient.checkBalance(ordertmp)) {
        	if(paymentServiceClient.pay(ordertmp)) {
        		return order;
        	}
        }
        order.setStatus("NOT_ENOUGH_FUND");
    	return orderService.updateOrder(order);
    	
    }
}
