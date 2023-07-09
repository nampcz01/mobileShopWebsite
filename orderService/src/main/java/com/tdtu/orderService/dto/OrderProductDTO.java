package com.tdtu.orderService.dto;

public class OrderProductDTO {
	
	private long orderId;
	private long productId;
	private long quantity;
	private long price;
	public OrderProductDTO() {
		super();
	}
	public OrderProductDTO(long orderId,long productId, long quantity, long price) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.quantity = quantity;
		this.price = price;
	}
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	
	
}
