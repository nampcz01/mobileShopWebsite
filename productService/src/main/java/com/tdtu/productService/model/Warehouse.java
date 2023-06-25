package com.tdtu.productService.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "warehouse")
public class Warehouse {
	@Id
	private Long productId;
	private Long amount;
	private String status;
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Warehouse() {
		super();
	}
	public Warehouse(Long productId, Long amount, String status) {
		super();
		this.productId = productId;
		this.amount = amount;
		this.status = status;
	}
	
	
}
