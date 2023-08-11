package com.tdtu.UserService.dto;

public class UserRespond {

	private String name;
    private String email;
    private String token;
    private String role;
	public UserRespond(String name, String email, String token, String role) {
		super();
		this.name = name;
		this.email = email;
		this.token = token;
		this.role = role;
	}
	public UserRespond() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
}
