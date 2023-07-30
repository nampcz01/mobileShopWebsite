package com.tdt.bqhnam.chatBotService.controller;  

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tdt.bqhnam.chatBotService.service.ChatbotService;
import com.tdt.bqhnam.chatBotService.service.ProductServiceClient;
import com.google.gson.JsonSyntaxException;

@RestController
@RequestMapping("/api/chatbot")
@CrossOrigin(origins = "*")
public class ChatbotController {

    private ChatbotService chatbotService;
    
    private final ProductServiceClient productServiceClient;

    public ChatbotController(ChatbotService chatbotService,ProductServiceClient productServiceClient) {
        this.chatbotService = chatbotService;
        this.productServiceClient = productServiceClient;
    }

    @PostMapping("/chat")
    public ResponseEntity<String> processInputRequest(@RequestParam String request) {
        String response = chatbotService.getChatCPTResponse(request);
        response = extractRespond(response);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    private String extractRespond(String respond) {
    	try {
    		
    		List<String> products = new ArrayList<String>();
    		String[] phoneDescriptions = respond.split("\\n");
    		for(int i = 2;i<phoneDescriptions.length-2;i=i+2) {
    			String phoneName = phoneDescriptions[i].substring(phoneDescriptions[i].indexOf(".")+2,phoneDescriptions[i].indexOf(":")-1);
    			products.add(phoneName);
    		}
    		Map<String, Object> productData = new HashMap<String, Object>();
    		productData.put("products",products);
    		products = productServiceClient.searchList(productData);
	        if(!products.isEmpty()) {
	        	respond = "Duoi day la 1 vai mau dien thoai cho ban tham khao : \n";
	        	for(String name:products) {
	            	respond = respond + " - "+ name + "\n";
	            }
	        }
    	}catch (Exception e) {
    		return respond;
    	}
		return respond;
    }

  
}
