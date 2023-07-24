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

import com.tdtu.productService.model.Product;
import com.tdtu.productService.model.ProductDetail;
import com.tdtu.productService.services.ProductService;

@RestController
@RequestMapping(path="/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        Iterable<Product> products = productService.getAllProducts();
        return products;
    }
	
	@GetMapping(value = {"/{id}"})
    public @NotNull Product getProduct(@PathVariable Long id) {
    	Product product = productService.getProduct(id);
        return product;
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

    @PutMapping(value = {"/update"})
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        productService.save(product);
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @DeleteMapping(value = {"/delete"})
    public ResponseEntity<Product> removeProduct(@RequestBody Map<String, Long> requestBody) {
        Long productId = requestBody.get("productId");
        productService.remove(productId);
        return new ResponseEntity(HttpStatus.OK);
    }
    
    @PostMapping(value = {"/searchList"})
    public List<String> searchListProduct(@RequestParam List<String> products) {
        return productService.searchList(products);
    }
}
