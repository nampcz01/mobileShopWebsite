package com.tdtu.productService.controller;


import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.productService.model.ProductDetail;
import com.tdtu.productService.services.ProductDetailService;

@RestController
@RequestMapping(path="/api/products")
public class ProductDetailController {

	@Autowired
	private ProductDetailService productDetailService;

    @PostMapping(value = {"/addDetail"})
    public ResponseEntity<ProductDetail> create(@RequestBody ProductDetail product) {
    	productDetailService.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping(value = {"/updateDetail "})
    public ResponseEntity<ProductDetail> updateProduct(@RequestBody ProductDetail product){
    	productDetailService.save(product);
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @GetMapping(value = {"/getDetail/{id}"})
    public @NotNull ProductDetail getProductDeatail(@PathVariable Long id) {
    	ProductDetail productDetail = productDetailService.getProductDetail(id);
        return productDetail;
    }
}
