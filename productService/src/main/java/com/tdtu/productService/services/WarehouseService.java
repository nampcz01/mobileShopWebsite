package com.tdtu.productService.services;

import com.tdtu.productService.model.Warehouse;

public interface WarehouseService {
	
	boolean checkProductQuantity(Long productId,Long quantity);
	
	Iterable<Warehouse> getAllWarehouse();
	
	Warehouse save(Warehouse warehouse);
	
	Warehouse updateProductQuantity(Long productId,Long quantity);

	Warehouse getWarehouseById(Long productId);

	void delete(Long productId);

}
