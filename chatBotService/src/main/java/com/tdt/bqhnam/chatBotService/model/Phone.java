package com.tdt.bqhnam.chatBotService.model;

public class Phone {
    private String name;
    private String manufacturer;
    private double price;
	public Phone() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Phone(String name, String manufacturer, double price) {
		super();
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}

    
}
