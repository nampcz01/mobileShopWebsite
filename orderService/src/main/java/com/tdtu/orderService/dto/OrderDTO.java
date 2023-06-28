package com.tdtu.orderService.dto;

import java.util.List;

public class OrderDTO {
	
	 private List<OrderProductDTO> productOrders;

	public OrderDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderDTO(List<OrderProductDTO> productOrders) {
		super();
		this.productOrders = productOrders;
	}

	public List<OrderProductDTO> getProductOrders() {
		return productOrders;
	}

	public void setProductOrders(List<OrderProductDTO> productOrders) {
		this.productOrders = productOrders;
	}
}
