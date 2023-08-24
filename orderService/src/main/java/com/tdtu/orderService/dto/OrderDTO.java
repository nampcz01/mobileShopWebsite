package com.tdtu.orderService.dto;

import java.util.Date;
import java.util.List;

import com.tdtu.orderService.model.ProductOrder;

public class OrderDTO {
	
	private Long id;
	private Long userId;
	private Date dateTime;
	private String status;
	private long totalPrice;
	private long numOfProducts;
	private List<OrderProductDTO> productOrders;

	public OrderDTO() {
		super();
	}

	
	public OrderDTO(Long id, Long userId, Date dateTime, String status, long totalPrice, long numOfProducts,
			List<OrderProductDTO> productOrders) {
		super();
		this.id = id;
		this.userId = userId;
		this.dateTime = dateTime;
		this.status = status;
		this.totalPrice = totalPrice;
		this.numOfProducts = numOfProducts;
		this.productOrders = productOrders;
	}
	
	public OrderDTO(List<OrderProductDTO> productOrders) {
		super();
		this.productOrders = productOrders;
	}
	
	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public Date getDateTime() {
		return dateTime;
	}


	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public long getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(long totalPrice) {
		this.totalPrice = totalPrice;
	}


	public long getNumOfProducts() {
		return numOfProducts;
	}


	public void setNumOfProducts(long numOfProducts) {
		this.numOfProducts = numOfProducts;
	}


	public List<OrderProductDTO> getProductOrders() {
		return productOrders;
	}

	public void setProductOrders(List<OrderProductDTO> productOrders) {
		this.productOrders = productOrders;
	}
}
