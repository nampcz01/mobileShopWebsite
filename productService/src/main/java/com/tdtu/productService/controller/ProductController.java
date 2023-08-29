package com.tdtu.productService.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

import javax.validation.constraints.NotNull;

import com.tdtu.productService.dto.ProductDTO;
import com.tdtu.productService.model.Product;
import com.tdtu.productService.model.ProductDetail;
import com.tdtu.productService.services.ProductDetailService;
import com.tdtu.productService.services.ProductService;

@RestController
@RequestMapping(path="/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private ProductDetailService productDetailService;
	
	@GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        Iterable<Product> products = productService.getAllProducts();
        return products;
    }
	
	@GetMapping(value = {"/{id}"})
    public @NotNull ProductDTO getProduct(@PathVariable Long id) {
    	Product product = productService.getProduct(id);
    	ProductDetail detail = productDetailService.getProductDetail(id);
    	ProductDTO productDTO = new ProductDTO(product.getProductId(),product.getName(),product.getManufacturer(),
    			product.getPrice(),product.getImage(),product.getPromotion(),detail.getDisplaySize(),detail.getOperatingSystem(),
    			detail.getDisplayType(),detail.getFrontCam(),detail.getBackCam(),detail.getRam(),detail.getRom(),
    			detail.getBattery(),detail.getChipset());
        return productDTO;
    }
	
	@GetMapping(value = {"/search"})
    public @NotNull Iterable<Product> searchProduct(@RequestParam String keywork) {
		Iterable<Product> products = productService.searchProducts(keywork);
        return products;
    }
	
	@GetMapping(value = {"/filter_manufacturer"})
    public @NotNull Iterable<Product> getProductByCategory(@RequestParam String manufacturer) {
		Iterable<Product> products = productService.getProductByCategory(manufacturer);
        return products;
    }
	

    @PostMapping(value = {"/create"})
    public ResponseEntity<Product> create(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
    
    @PostMapping(value = {"/createFull"})
    public ResponseEntity<ProductDTO> createFull(@RequestBody ProductDTO productDTO) {
    	Product product = new Product(productDTO.getName(),
    			productDTO.getManufacturer(),productDTO.getPrice(),
    			productDTO.getImage(),productDTO.getPromotion());
    	product = productService.save(product);
    	ProductDetail detail = new ProductDetail(product.getProductId(),productDTO.getDisplaySize(),
    			productDTO.getOperatingSystem(),productDTO.getDisplayType(),productDTO.getFrontCam(),
    			productDTO.getBackCam(),productDTO.getRam(),productDTO.getRom(),productDTO.getBattery(),productDTO.getChipset());
    	productDetailService.save(detail);
    	productDTO.setProductId(product.getProductId());
        return new ResponseEntity<>(productDTO, HttpStatus.CREATED);
    }

    @PutMapping(value = {"/update/{id}"})
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product product){
    	product.setProductId(id);
        productService.save(product);
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @DeleteMapping(value = {"/delete/{id}"})
    public ResponseEntity<Product> removeProduct(@PathVariable Long id) {
        productService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    
    @PostMapping(value = {"/searchList"})
    public List<String> searchListProduct(@RequestBody Map<String, Object> requestBody) {
    	List<String> products = (List<String>) requestBody.get("products");
        return productService.searchList(products);
    }
    @GetMapping(value = {"/getListManu"})
    public List<String> getListManu() {
        return productService.getListManufacturer();
    }
    
}
