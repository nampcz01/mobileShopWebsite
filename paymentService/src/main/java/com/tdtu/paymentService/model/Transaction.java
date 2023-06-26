package com.tdtu.paymentService.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "transaction")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private long fromId;
	private long toId;
	private Date dateTime;
	private Long amount;
	public Transaction(Long id, long fromId, long toId, Date dateTime, Long amount) {
		super();
		this.id = id;
		this.fromId = fromId;
		this.toId = toId;
		this.dateTime = dateTime;
		this.amount = amount;
	}
	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getFromId() {
		return fromId;
	}
	public void setFromId(long fromId) {
		this.fromId = fromId;
	}
	public long getToId() {
		return toId;
	}
	public void setToId(long toId) {
		this.toId = toId;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	
}
