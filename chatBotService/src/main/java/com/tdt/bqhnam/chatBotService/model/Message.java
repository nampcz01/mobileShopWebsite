package com.tdt.bqhnam.chatBotService.model;

public class Message {
    public String role;
    public String content;
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Message(String role, String content) {
		super();
		this.role = role;
		this.content = content;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
    
   
}
