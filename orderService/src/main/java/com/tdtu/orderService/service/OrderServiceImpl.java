package com.tdtu.orderService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdtu.orderService.model.Order;
import com.tdtu.orderService.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
    private OrderRepository orderRepository;

	@Override
	public Iterable<Order> getAllOrders(long userId) {
		if(Long.valueOf(userId) != null) {
			return orderRepository.getOrdersByUserId(userId);
		}
		else{
			return orderRepository.findAll();
		}
	}

	@Override
	public Order getOrderById(long id) {
		return orderRepository.findById(id).orElse(null);
	}

	@Override
	public Order createOrder(Order order) {
		return orderRepository.save(order);
	}

	@Override
	public Order updateOrder(Order order) {
		return orderRepository.save(order);
	}

}
