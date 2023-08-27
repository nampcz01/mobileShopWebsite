package com.tdtu.productService.dto;

public class ProductDTO {
	private Long productId;
	private String name;
	private String manufacturer;
	private Long price;
	private String image;
	private Long promotion;
	private double displaySize;
	private String operatingSystem;
	private String displayType;
	private String frontCam;
	private String backCam;
	private Long ram;
	private Long rom;
	private Long battery;
	private String Chipset;
	public ProductDTO() {
		super();
	}
	public ProductDTO(String name, String manufacturer, Long price, String image, Long promotion, double displaySize,
			String operatingSystem, String displayType, String frontCam, String backCam, Long ram, Long rom,
			Long battery, String chipset) {
		super();
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
		this.image = image;
		this.promotion = promotion;
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
	public ProductDTO(Long productId, String name, String manufacturer, Long price, String image, Long promotion,
			double displaySize, String operatingSystem, String displayType, String frontCam, String backCam, Long ram,
			Long rom, Long battery, String chipset) {
		super();
		this.productId = productId;
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
		this.image = image;
		this.promotion = promotion;
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Long getPromotion() {
		return promotion;
	}
	public void setPromotion(Long promotion) {
		this.promotion = promotion;
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
