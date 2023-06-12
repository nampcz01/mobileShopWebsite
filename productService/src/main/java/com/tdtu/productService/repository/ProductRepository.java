package com.tdtu.productService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.productService.model.Product;

public interface ProductRepository extends JpaRepository<Product,String>{

}
