package com.tdtu.productService.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.tdtu.productService.model.Product;
import com.tdtu.productService.repository.ProductRepository;

@Service
@Repository
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public Iterable<Product> getAllProducts() {
		return productRepo.findAll();
	}


	@Override
	public Product save(Product product) {
		return productRepo.save(product);
	}

}
