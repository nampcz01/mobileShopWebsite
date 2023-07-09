package com.tdtu.orderService.service;

import java.util.List;

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

	@Override
	public List<ProductOrder> getProductsByOrderId(long orderID) {
		return orderProductRepo.getProductsByOrderId(orderID);
	}

	@Override
	public ProductOrder getProductOrder(long orderId, long productId) {
		return orderProductRepo.findProductOrder(orderId, productId);
	}

	@Override
	public void removeProductOrder(ProductOrder productOrder) {
		orderProductRepo.delete(productOrder);
		
	}

}
