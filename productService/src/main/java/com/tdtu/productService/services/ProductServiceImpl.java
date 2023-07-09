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
	
	@Autowired
	private ProductDetailService productDetailService;
	
	@Autowired
	private WarehouseService warehouseService;

	@Override
	public Iterable<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	@Override
	public Product getProduct(Long productId) {
		return productRepo.findById(productId).orElse(null);
	}

	@Override
	public Product save(Product product) {
		return productRepo.save(product);
	}
	

	@Override
	public void remove(Long productId) {
		Product tmp = getProduct(productId);
		productDetailService.remove(productId);
		warehouseService.delete(productId);
		if( tmp != null ) {
			productRepo.delete(tmp);
		}
	}

	@Override
	public Iterable<Product> searchProducts(String keywork) {
		return productRepo.search(keywork);
	}

	@Override
	public Iterable<Product> getProductByCategory(String keywork) {
		return productRepo.searchByCategory(keywork);
	}
}
