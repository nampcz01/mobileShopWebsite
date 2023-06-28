package com.tdtu.orderService.service;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "productService", url = "http://localhost:9001")
public interface ProductServiceClient {
	
	@PostMapping("/api/products/warehouse/checkQuantity")
	boolean checkQuantity(@RequestBody Map<String, Long> requestBody );

}
