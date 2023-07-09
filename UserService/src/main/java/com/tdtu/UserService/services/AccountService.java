package com.tdtu.UserService.services;


import org.springframework.security.core.userdetails.UserDetailsService;

import com.tdtu.UserService.dto.AccountDTO;
import com.tdtu.UserService.dto.PasswordDTO;
import com.tdtu.UserService.model.Account;


public interface AccountService extends UserDetailsService {
    public Iterable<Account> getAllAccount();
    
	Account login(String username, String password);

	AccountDTO getAccount(String username);

	Account saveAccount(Account user);
	
	Account registerNewUserAccount(AccountDTO accountDTO);

	void updatePassword(PasswordDTO passwordDTO, String username);

	String saveUser(Account account);

	String generateToken(String username);
}
