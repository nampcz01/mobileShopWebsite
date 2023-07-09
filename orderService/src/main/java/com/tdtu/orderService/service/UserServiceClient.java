package com.tdtu.orderService.service;
import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "userService", url = "http://localhost:9002")
public interface UserServiceClient {
	
	@PostMapping("/api/users/getUserId")
	long getUserId(@RequestBody Map<String, String> requestBody);

}
