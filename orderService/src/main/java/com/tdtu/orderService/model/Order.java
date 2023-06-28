package com.tdtu.orderService.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private Date dateTime;
	private String status;
	private List<ProductOrder> products;
	private long totalPrice;
	private long numOfProducts;
	
	public Order(Long id, Long userId, Date dateTime, String status, List<ProductOrder> products, long totalPrice,
			long numOfProducts) {
		super();
		this.id = id;
		this.userId = userId;
		this.dateTime = dateTime;
		this.status = status;
		this.products = products;
		this.totalPrice = totalPrice;
		this.numOfProducts = numOfProducts;
	}

	public Order() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date date) {
		this.dateTime = date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<ProductOrder> getProducts() {
		return products;
	}

	public void setProducts(List<ProductOrder> products) {
		this.products = products;
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
	
}
