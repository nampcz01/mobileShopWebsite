package com.tdtu.UserService.controller;


import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.UserService.model.User;
import com.tdtu.UserService.services.UserService;

@RestController
@RequestMapping(path="/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value = { "", "/" })
    public Iterable<User> getProducts() {
        Iterable<User> users = userService.getAllUser();
        return users;
    }
	
	@GetMapping(value = {"/{id}"})
    public User getUser(@PathVariable Long id) {
		User user = userService.getUser(id);
        return user;
    }

    @PostMapping(value = {"/register"})
    public ResponseEntity<User> create(@RequestBody User user) {
        userService.register(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping(value = {"/updateRole"})
    public ResponseEntity<User> updateRole(@RequestBody User product){
        userService.register(product);
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @PostMapping(value = {"/updatePassword"})
    public ResponseEntity<User> updatePassword(@RequestBody User product){
        userService.register(product);
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @PostMapping(value = {"/delete"})
    public ResponseEntity<User> removeUser(@RequestBody Map<String, Long> requestBody) {
        Long userId = requestBody.get("userId");
        userService.remove(userId);
        return new ResponseEntity(HttpStatus.OK);
    }

}
