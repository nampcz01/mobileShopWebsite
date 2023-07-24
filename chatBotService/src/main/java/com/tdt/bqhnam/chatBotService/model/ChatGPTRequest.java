package com.tdt.bqhnam.chatBotService.model;

import java.util.List;

public class ChatGPTRequest {

    private String model;
    private List<Message> messages;
    private Integer max_tokens;
	public ChatGPTRequest(String model, List<Message> messages, Integer max_tokens) {
		super();
		this.model = model;
		this.messages = messages;
		this.max_tokens = max_tokens;
	}
	public ChatGPTRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public List<Message> getMessages() {
		return messages;
	}
	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}
	public Integer getMax_tokens() {
		return max_tokens;
	}
	public void setMax_tokens(Integer max_tokens) {
		this.max_tokens = max_tokens;
	}
}
