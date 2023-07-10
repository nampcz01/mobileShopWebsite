package com.tdtu.orderService.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "productOrder")
public class ProductOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	@Column(nullable = false)
	private long orderId;
	@Column(nullable = false)
	private long productId;
    @Column(nullable = false)
    private String productname;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private long quantity;
    @Column(nullable = false)
    private long price;
	public ProductOrder() {
		super();
	}
	public ProductOrder(long orderId, long productId,String productname,String image, long quantity, long price) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.productname = productname;
		this.image = image;
		this.quantity = quantity;
		this.price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
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
