package com.tdtu.orderService.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orderTable")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long userId;
	private Date dateTime;
	private String status;
	
	public Order(Long id, Long userId, Date dateTime, String status) {
		super();
		this.id = id;
		this.userId = userId;
		this.dateTime = dateTime;
		this.status = status;
	}
	
	public Order(Long userId, Date dateTime, String status) {
		super();
		this.userId = userId;
		this.dateTime = dateTime;
		this.status = status;
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
	
}
