package com.tdtu.productService.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.tdtu.productService.model.Warehouse;
import com.tdtu.productService.repository.WarehouseRepository;

@Service
@Repository
public class WarehouseServiceImpl implements WarehouseService{
	
	@Autowired
	private WarehouseRepository warehouseRepo;

	@Override
	public boolean checkProductQuantity(Long productId, Long quantity) {
		Warehouse wh = getWarehouseById(productId);
		if(wh != null) {
			if(wh.getAmount() >= quantity) {
				return true;
			}
		}
		return false;
	}

	@Override
	public Iterable<Warehouse> getAllWarehouse() {
		return warehouseRepo.findAll();
	}

	@Override
	public Warehouse save(Warehouse warehouse) {
		if(warehouse.getAmount() > 0) {
			warehouse.setStatus("AVAILABLE");
		}
		else {
			warehouse.setStatus("OUT OF STOCK");
		}
		return warehouseRepo.save(warehouse);
	}
	
	@Override
	public Warehouse getWarehouseById(Long productId) {
		return warehouseRepo.findById(productId).orElse(null);
	}

	@Override
	public Warehouse updateProductQuantity(Long productId, Long quantity) {
		Warehouse wh = getWarehouseById(productId);
		if(wh != null) {
			if(checkProductQuantity(productId,quantity)){
				wh.setAmount(wh.getAmount() - quantity);
				if(wh.getAmount() <= 0) {
					wh.setStatus("OUT OF STOCK");
				}
				return warehouseRepo.save(wh);
			}
		}
		return null;
	}

}
