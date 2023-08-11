package com.tdtu.UserService.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.tdtu.UserService.dto.AuthRequest;
import com.tdtu.UserService.dto.UserRespond;
import com.tdtu.UserService.entity.Account;
import com.tdtu.UserService.service.AccountService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String addNewUser(@RequestBody Account user) {
    	user.setRole("CUSTOMER");
        return accountService.saveUser(user);
    }

    @PostMapping("/login")
    public UserRespond getToken(@RequestBody AuthRequest authRequest) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authenticate.isAuthenticated()) {
        	Account user = accountService.getUserByUserName(authRequest.getUsername());
        	UserRespond userRespond = new UserRespond(user.getName(),user.getEmail(),accountService.generateToken(authRequest.getUsername()),user.getRole());
            return userRespond;
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
    	accountService.validateToken(token);
        return "Token is valid";
    }
    
    @PostMapping("/getUserId")
    public long getUserId(@RequestBody Map<String, String> requestBody) {
    	String username = requestBody.get("username");
    	return accountService.getUserIdByUserName(username);
    }
    
    @PostMapping("/changePassword")
    public String changePassword(@RequestBody Map<String, String> requestBody) {
    	String username = requestBody.get("username");
    	String currentPass = requestBody.get("currentPassword");
    	String newPass = requestBody.get("newPassword");
    	return accountService.changePassword(username, currentPass, newPass);
    }
    
}
