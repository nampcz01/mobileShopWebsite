package com.tdtu.productService.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.tdtu.productService.model.ProductDetail;
import com.tdtu.productService.repository.ProductDetailRepository;

@Service
@Repository
public class ProductDetailServiceImpl implements ProductDetailService{
	
	@Autowired
	private ProductDetailRepository productDetailRepo;

	@Override
	public ProductDetail save(ProductDetail product) {
		return productDetailRepo.save(product);
	}

	@Override
	public ProductDetail getProductDetail(Long productId) {
		return productDetailRepo.findById(productId).orElse(null);
	}
	
	@Override
	public void remove(Long productId) {
		ProductDetail detail = getProductDetail(productId);
		if(detail != null) {
			productDetailRepo.delete(detail);
		}
	}

}
