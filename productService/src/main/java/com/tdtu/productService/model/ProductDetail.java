package com.tdtu.productService.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productDetail")
public class ProductDetail {
	@Id
	private Long productId;
	private double displaySize;
	private String operatingSystem;
	private String displayType;
	private String frontCam;
	private String backCam;
	private Long ram;
	private Long rom;
	private Long battery;
	private String Chipset; 
	
	public ProductDetail() {
	}
	public ProductDetail(Long productId, double displaySize, String operatingSystem, String displayType,
			String frontCam, String backCam, Long ram, Long rom, Long battery, String chipset) {
		super();
		this.productId = productId;
		this.displaySize = displaySize;
		this.operatingSystem = operatingSystem;
		this.displayType = displayType;
		this.frontCam = frontCam;
		this.backCam = backCam;
		this.ram = ram;
		this.rom = rom;
		this.battery = battery;
		Chipset = chipset;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public double getDisplaySize() {
		return displaySize;
	}
	public void setDisplaySize(double displaySize) {
		this.displaySize = displaySize;
	}
	public String getOperatingSystem() {
		return operatingSystem;
	}
	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}
	public String getDisplayType() {
		return displayType;
	}
	public void setDisplayType(String displayType) {
		this.displayType = displayType;
	}
	public String getFrontCam() {
		return frontCam;
	}
	public void setFrontCam(String frontCam) {
		this.frontCam = frontCam;
	}
	public String getBackCam() {
		return backCam;
	}
	public void setBackCam(String backCam) {
		this.backCam = backCam;
	}
	public Long getRam() {
		return ram;
	}
	public void setRam(Long ram) {
		this.ram = ram;
	}
	public Long getRom() {
		return rom;
	}
	public void setRom(Long rom) {
		this.rom = rom;
	}
	public Long getBattery() {
		return battery;
	}
	public void setBattery(Long battery) {
		this.battery = battery;
	}
	public String getChipset() {
		return Chipset;
	}
	public void setChipset(String chipset) {
		Chipset = chipset;
	}
}
