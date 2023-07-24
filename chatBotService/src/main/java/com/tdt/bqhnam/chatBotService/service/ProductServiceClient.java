package com.tdt.bqhnam.chatBotService.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "productService", url = "http://localhost:9001")
public interface ProductServiceClient {
	
	@PostMapping("/api/products/searchList")
	List<String> searchList(List<String> products);
}
