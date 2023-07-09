package com.tdtu.orderService.service;

import java.util.List;

import com.tdtu.orderService.model.ProductOrder;

public interface OrderProductService {

	ProductOrder create(ProductOrder productOrder);
	
	List<ProductOrder> getProductsByOrderId(long orderID);
	
	ProductOrder getProductOrder(long orderId,long productId);
	
	void removeProductOrder(ProductOrder productOrder);


}
