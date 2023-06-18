package com.tdtu.productService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdtu.productService.model.ProductDetail;

@Repository
public interface ProductDetailRepository extends JpaRepository<ProductDetail,Long>{

}
