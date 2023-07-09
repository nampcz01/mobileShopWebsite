package com.tdtu.productService.services;


import com.tdtu.productService.model.Product;

public interface ProductService {
    public Iterable<Product> getAllProducts();
    
    public Iterable<Product> searchProducts(String keywork);
    
    public Iterable<Product> getProductByCategory(String keywork);


    public Product save(Product product);


	void remove(Long productId);


	Product getProduct(Long productId);
}