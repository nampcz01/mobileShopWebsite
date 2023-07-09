package com.tdtu.productService.services;

import com.tdtu.productService.model.Warehouse;

public interface WarehouseService {
	
	boolean checkProductQuantity(Long productId,Long quantity);
	
	Iterable<Warehouse> getAllWarehouse();
	
	Warehouse save(Warehouse warehouse);

	Warehouse getWarehouseById(Long productId);

	void delete(Long productId);

	void exportWarehouse(Long productId, Long quantity);

	void importWarehouse(Long productId, Long quantity);

}
