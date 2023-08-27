package com.tdtu.productService.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long productId;
	private String name;
	private String manufacturer;
	private Long price;
	private String image;
	private Long promotion;
	
	
	public Product() {}
	
	public Product(Long productId, String name, String manufacturer, Long price, String image) {
		super();
		this.productId = productId;
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
		this.image = image;
	}
	
	

	public Product(String name, String manufacturer, Long price, String image, Long promotion) {
		super();
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
		this.image = image;
		this.promotion = promotion;
	}

	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Product(Product product) {
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
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
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public Long getPromotion() {
		return promotion;
	}
	public void setPromotion(Long promotion) {
		this.promotion = promotion;
	}
}
