package com.tdtu.orderService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdtu.orderService.model.ProductOrder;
import com.tdtu.orderService.repository.OrderProductRepository;

@Service
public class OrderProductServiceImpl implements OrderProductService{
	
	@Autowired
	private OrderProductRepository orderProductRepo;

	@Override
	public ProductOrder create(ProductOrder productOrder) {
		return orderProductRepo.save(productOrder);
	}

}
