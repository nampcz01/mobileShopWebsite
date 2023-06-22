package com.tdtu.UserService.services;


import com.tdtu.UserService.dto.AccountDTO;
import com.tdtu.UserService.dto.PasswordDTO;
import com.tdtu.UserService.model.Role;
import com.tdtu.UserService.model.Account;


public interface AccountService {
    public Iterable<Account> getAllAccount();
    
    Role saveRole(Role role);
    
    void addRoletoAccount(String username,String rolename);

	Account login(String username, String password);

	AccountDTO getAccount(String username);

	Account saveAccount(Account user);
	
	Account registerNewUserAccount(AccountDTO accountDTO);

	void updatePassword(PasswordDTO passwordDTO, String username);
}
