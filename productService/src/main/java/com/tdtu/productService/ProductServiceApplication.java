package com.tdtu.productService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Lazy;

import com.netflix.discovery.EurekaClient;


@SpringBootApplication
@EnableDiscoveryClient
public class ProductServiceApplication {
	
	 @Autowired
	 @Lazy
	 private EurekaClient eurekaClient;

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

}
