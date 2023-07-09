package com.tdtu.productService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tdtu.productService.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
	@Query("SELECT p FROM Product p WHERE p.name LIKE %?1%")
    public List<Product> search(String keyword);
	
	@Query("SELECT p FROM Product p WHERE p.manufacturer LIKE %?1%")
    public List<Product> searchByCategory(String keyword);
}
