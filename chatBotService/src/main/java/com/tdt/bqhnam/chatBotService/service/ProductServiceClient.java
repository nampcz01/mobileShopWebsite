package com.tdt.bqhnam.chatBotService.service;

import java.util.List;
import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "productService", url = "http://localhost:9001")
public interface ProductServiceClient {
	
	@PostMapping("/api/products/searchList")
	List<String> searchList(@RequestBody Map<String, Object> requestBody);
}
