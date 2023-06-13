package com.tdtu.productService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdtu.productService.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,String>{

}
