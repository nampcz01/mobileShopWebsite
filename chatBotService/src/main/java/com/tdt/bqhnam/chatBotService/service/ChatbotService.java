package com.tdt.bqhnam.chatBotService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.tdt.bqhnam.chatBotService.model.ChatGPTResponse;
import com.tdt.bqhnam.chatBotService.model.Message;
import com.tdt.bqhnam.chatBotService.repository.CacheRespondRepository;
import com.tdt.bqhnam.chatBotService.model.CacheRespond;
import com.tdt.bqhnam.chatBotService.model.ChatGPTRequest;

import java.util.List;

@Service
public class ChatbotService {

    @Value("${openai.api.key}")
    private String apiKey;

    private static final String OPEN_AI_CHAT_ENDPOINT = "https://api.openai.com/v1/chat/completions";

    private RestTemplate restTemplate;
    
    @Autowired
    private CacheRespondRepository cacheRespindRepo;

    public ChatbotService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getChatCPTResponse(String req) {

    	CacheRespond cacheRespond = cacheRespindRepo.search(req);
    	if(cacheRespond != null) {
    		return cacheRespond.getRespond();
    	}
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey);

        ChatGPTRequest chatGPTRequest = new ChatGPTRequest();
        chatGPTRequest.setModel("gpt-3.5-turbo"); // Most capable GPT-3.5 model and optimized for chat.
        chatGPTRequest.setMessages(List.of(new Message("user", req))); // Input request for ChatGPT
        chatGPTRequest.setMax_tokens(200); // The maximum number of tokens to generate in the chat completion.

        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<ChatGPTRequest> request = new HttpEntity<>(chatGPTRequest, headers);

        String respond = restTemplate.postForObject(OPEN_AI_CHAT_ENDPOINT, request, ChatGPTResponse.class).getChoices().get(0).getMessage().getContent();
        CacheRespond cacheRespondTmp = new CacheRespond(req,respond);
        cacheRespindRepo.save(cacheRespondTmp);
        return respond;
    }
}