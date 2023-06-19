package com.tdtu.UserService.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdtu.UserService.model.Role;
import com.tdtu.UserService.model.User;
import com.tdtu.UserService.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public Iterable<User> getAllUser() {
		return userRepo.findAll();
	}

	@Override
	public User register(User user) {
		return userRepo.save(user);
	}

	@Override
	public void remove(Long userId) {
		User user = getUser(userId);
		if(user != null) {
			userRepo.delete(user);
		}
	}

	@Override
	public User getUser(Long userId) {
		return userRepo.findById(userId).orElse(null);
	}

	@Override
	public User login(String username, String password) {
		User user = userRepo.findByUsername(username);
		if(user != null) {
			if(user.getPassword().equalsIgnoreCase(password)) {
				return user;
			}
		}
		return null;
	}

	@Override
	public User updateRole(Long id, Role role) {
		User user = getUser(id);
		if(user != null) {
			user.setRole(role);
			userRepo.save(user);
		}
		return null;
	}


}
