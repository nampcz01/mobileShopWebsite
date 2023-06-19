package com.tdtu.UserService.services;


import com.tdtu.UserService.model.Role;
import com.tdtu.UserService.model.User;


public interface UserService {
    public Iterable<User> getAllUser();


    public User register(User user);


	void remove(Long userId);


	User getUser(Long userId);

	User login(String username, String password);
	
	User updateRole(Long id, Role role);
}
