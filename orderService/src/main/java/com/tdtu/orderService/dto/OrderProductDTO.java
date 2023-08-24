package com.tdtu.orderService.dto;

import javax.persistence.Column;

public class OrderProductDTO {
	
	private long orderId;
	private long productId;
	private String productname;
    private String image;
	private long quantity;
	private long price;
	public OrderProductDTO() {
		super();
	}
	public OrderProductDTO(long orderId,long productId ,String productname,String image, long quantity, long price) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.productname = productname;
		this.image = image;
		this.quantity = quantity;
		this.price = price;
	}
	public OrderProductDTO(long productId ,String productname,String image, long quantity, long price) {
		super();
		this.productId = productId;
		this.productname = productname;
		this.image = image;
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
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
}
