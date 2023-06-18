package com.tdtu.productService.services;

import com.tdtu.productService.model.ProductDetail;

public interface ProductDetailService {

    public ProductDetail save(ProductDetail product);

	ProductDetail getProductDetail(Long productId);

	void remove(Long productId);
	
}
