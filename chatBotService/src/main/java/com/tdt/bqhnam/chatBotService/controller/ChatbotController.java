package com.tdt.bqhnam.chatBotService.controller;  

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tdt.bqhnam.chatBotService.service.ChatbotService;
import com.tdt.bqhnam.chatBotService.service.ProductServiceClient;
import com.tdt.bqhnam.chatBotService.model.Phone;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

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
    	
    	Gson gson = new Gson();
        List<Phone> phoneList = gson.fromJson(respond, new TypeToken<List<Phone>>(){}.getType());
        List<String> phoneNames = new ArrayList<String>();
        for(Phone phone:phoneList) {
        	phoneNames.add(phone.getName());
        }
        phoneNames = productServiceClient.searchList(phoneNames);
        if(!phoneNames.isEmpty()) {
        	respond = "Duoi day la 1 vai mau dien thoai cho ban tham khao : \n";
        	for(String name:phoneNames) {
            	respond = respond + " - "+ name + "\n";
            }
        }
		return respond;
    }

  
}
