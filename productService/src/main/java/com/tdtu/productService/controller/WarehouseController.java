package com.tdtu.productService.controller;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.productService.model.Warehouse;
import com.tdtu.productService.services.WarehouseService;

@RestController
@RequestMapping(path="/api/products/warehouse")
public class WarehouseController {
	
	@Autowired
	private WarehouseService warehousrService;
	
	@GetMapping(value = { "", "/" })
    public @NotNull Iterable<Warehouse> getWarehouses() {
        Iterable<Warehouse> warehouses = warehousrService.getAllWarehouse();
        return warehouses;
    }
	
	@GetMapping(value = { "", "/{id}" })
    public @NotNull Warehouse getWarehouse(@PathVariable Long id) {
        Warehouse warehouse = warehousrService.getWarehouseById(id);
        return warehouse;
    }
	
	@PostMapping(value="/create")
	public Warehouse saveWarehouse(@RequestBody Warehouse wh) {
        return warehousrService.save(wh);
    }
	
	@PostMapping(value="/checkQuantity")
	public boolean checkQuantity(@RequestBody Map<String, Long> requestBody ) {
		Long productId = requestBody.get("productId");
		Long quantity = requestBody.get("quantity");
        return warehousrService.checkProductQuantity(productId, quantity);
    }
	
	@PutMapping(value="/update")
	public ResponseEntity<Object> updateQuantity(@RequestBody Map<String, Long> requestBody ) {
		Long productId = requestBody.get("productId");
		Long quantity = requestBody.get("quantity");
        warehousrService.updateProductQuantity(productId, quantity);
        return ResponseEntity.ok().build();
    }
	
	

}
