package com.tdtu.UserService.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.UserService.dto.AccountDTO;
import com.tdtu.UserService.dto.AuthRequest;
import com.tdtu.UserService.dto.PasswordDTO;
import com.tdtu.UserService.model.Account;
import com.tdtu.UserService.services.AccountService;
import org.springframework.security.core.Authentication;

import lombok.Data;

@RestController
@RequestMapping(path="/api/users")
public class AccountController {
	
	@Autowired
	private AccountService userService;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@GetMapping(value = { "", "/" })
    public Iterable<Account> getProducts() {
        Iterable<Account> users = userService.getAllAccount();
        return users;
    }

    @PostMapping(value = {"/register"})
    public ResponseEntity registerAccount(@RequestBody AccountDTO accountDTO) {
        return ResponseEntity.ok().body(userService.registerNewUserAccount(accountDTO));
   }

	@GetMapping("/info")
	public ResponseEntity getLoggedUser(@RequestAttribute("username") String username) {
	    return ResponseEntity.ok().body(userService.getAccount(username));
	}
	
	@PutMapping("/password")
	public ResponseEntity updatePassword(@RequestBody PasswordDTO passwordDTO, @RequestAttribute("username") String username) {
		userService.updatePassword(passwordDTO, username);
	    return ResponseEntity.ok().build();
	}
	
	@PostMapping(path="/login")
    public String login(@RequestBody AuthRequest authRequest) throws Exception {
		Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authenticate.isAuthenticated()) {
            return userService.generateToken(authRequest.getUsername());
        } else {
            throw new RuntimeException("invalid access");
        }
    }
	
	@Data
	class RoleToAccountForm {
	    private String username;
	    private String roleName;
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getRoleName() {
			return roleName;
		}
		public void setRoleName(String roleName) {
			this.roleName = roleName;
		}
	    
	}

}
