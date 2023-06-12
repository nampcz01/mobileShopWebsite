package com.tdtu.productService.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import javax.validation.constraints.NotNull;

import com.tdtu.productService.model.Product;
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

    @PostMapping(value = {"/create"})
    public ResponseEntity<Product> create(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

}
