package com.tdtu.orderService.service;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "paymentService", url = "http://localhost:9003")
public interface PaymentServiceClient {
	
	@PostMapping("/api/payments/accounts/checkBalance")
	boolean checkBalance(@RequestBody Map<String, Long> requestBody);
	
	@PostMapping(value = {"/accounts/pay"})
    boolean pay(@RequestBody Map<String, Long> requestBody);

}
