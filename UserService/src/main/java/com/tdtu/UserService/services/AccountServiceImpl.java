package com.tdtu.UserService.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tdtu.UserService.dto.AccountDTO;
import com.tdtu.UserService.dto.PasswordDTO;
import com.tdtu.UserService.exception.PasswordNotMatchedException;
import com.tdtu.UserService.exception.UserInfoDuplicateException;
import com.tdtu.UserService.model.Account;
import com.tdtu.UserService.security.CustomUserDetails;
import com.tdtu.UserService.repository.AccountRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import java.util.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Service
@RequiredArgsConstructor
@Slf4j
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private AccountRepository userRepo;
	
	@Autowired
    private JwtService jwtService;
	
	private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();;

	@Override
	public Iterable<Account> getAllAccount() {
		return userRepo.findAll();
	}

	@Override
	public Account saveAccount(Account user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}

	@Override
	public Account login(String username, String password) {
		Account user = userRepo.findByUsername(username);
		if(user != null) {
			if(user.getPassword().equalsIgnoreCase(passwordEncoder.encode(user.getPassword()))) {
				return user;
			}
		}
		return null;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account user  = userRepo.findByUsername(username);
		if (user == null) {
            throw new UsernameNotFoundException("User not found in the db");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        return new CustomUserDetails(user);
    }


	@Override
	public AccountDTO getAccount(String username) {
        AccountDTO accountDTO = transformAccountEntityToDTO(userRepo.findByUsername(username));
        return accountDTO;
    }

	@Override
	public Account registerNewUserAccount(AccountDTO accountDTO) {
		if (emailExist(accountDTO.getEmail()) || userRepo.findByUsername(accountDTO.getUsername()) != null) {
            throw new UserInfoDuplicateException("Username or email duplicated");
        }
        Account account = new Account();
        account.setName(accountDTO.getName());

        account.setPassword(accountDTO.getPassword());
        account.setUsername(accountDTO.getUsername());

        account.setEmail(accountDTO.getEmail());
        Account registeredAccount = saveAccount(account);
        return registeredAccount;
    }
	
	private boolean emailExist(String email) {
        Collection<Account> accounts = userRepo.findByEmail(email);
        return accounts.size() != 0;
    }
	
	private AccountDTO transformAccountEntityToDTO(Account account) {
        AccountDTO accountDTO = new AccountDTO();
        accountDTO.setName(account.getName());
        accountDTO.setUsername(account.getUsername());
        accountDTO.setEmail(account.getEmail());
        return accountDTO;
    }

	@Override
    public void updatePassword(PasswordDTO passwordDTO, String username) {
        Account account = userRepo.findByUsername(username);

        if (account == null) {
            throw new UsernameNotFoundException("User not found in the db");
        }

        String encodedNewPass = passwordEncoder.encode(passwordDTO.getNewPassword());
        if (!passwordEncoder.matches(passwordDTO.getOldPassword(), account.getPassword())) {
            throw new PasswordNotMatchedException("profile.password.not.matched.error");
        }

        userRepo.updatePassword(encodedNewPass, username);
    }
	@Override
	public String saveUser(Account account) {
		account.setPassword(passwordEncoder.encode(account.getPassword()));
        userRepo.save(account);
        return "user added to the system";
    }
	@Override
    public String generateToken(String username) {
        return jwtService.generateToken(username);
    }

}
