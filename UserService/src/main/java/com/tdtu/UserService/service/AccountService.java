package com.tdtu.UserService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tdtu.UserService.entity.Account;
import com.tdtu.UserService.repository.UserCredentialRepository;

@Service
public class AccountService {

    @Autowired
    private UserCredentialRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String saveUser(Account credential) {
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        Account checkUserName = getUserByUserName(credential.getName());
        Account checkMail = repository.findByEmail(credential.getEmail()).orElse(null);
        if(checkUserName == null && checkMail == null ) {
        	repository.save(credential);
            return "user added to the system";
        }
        else if(checkUserName != null) {
        	return "the username is existed";
        }
        else {
        	return "the email address is existed";
        }
        
    }

    public String generateToken(String username) {
        return jwtService.generateToken(username);
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }

	public long getUserIdByUserName(String username) {
		Account acc = repository.findByName(username).orElse(null);
		return acc.getId();
	    }
	public Account getUserByUserName(String username) {
		Account acc = repository.findByName(username).orElse(null);
		return acc;
	    }
	
	public String changePassword(String username,String currentPass,String newPass) {
		Account user = getUserByUserName(username);
		if(true) {
			user.setPassword(passwordEncoder.encode(newPass));
			repository.save(user);
			return "Change passwork successfully";
		}
		else {
			return "the current passwork is incorrect";
		}
		
	}
}


