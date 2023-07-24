package com.tdt.bqhnam.chatBotService.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cacheRespond")
public class CacheRespond {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long requestId;
	@Column(length = 1000)
	private String request;
	@Column(length = 1000)
	private String respond;
	public CacheRespond() {
		super();
	}
	public CacheRespond(String request, String respond) {
		super();
		this.request = request;
		this.respond = respond;
	}
	public Long getRequestId() {
		return requestId;
	}
	public void setRequestId(Long requestId) {
		this.requestId = requestId;
	}
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
	public String getRespond() {
		return respond;
	}
	public void setRespond(String respond) {
		this.respond = respond;
	}
}

