package com.tdtu.orderService.service;

import com.tdtu.orderService.model.Order;

public interface OrderService {
	
	Iterable<Order> getAllOrders();
	
	Iterable<Order> getAllOrdersByUserId(long userId);
	
	Order getOrderById(long id);
	
	Order createOrder(Order order);
	
	Order updateOrder(Order order);

}
