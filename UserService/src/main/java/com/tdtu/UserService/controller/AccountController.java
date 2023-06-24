package com.tdtu.UserService.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.UserService.dto.AccountDTO;
import com.tdtu.UserService.dto.PasswordDTO;
import com.tdtu.UserService.model.Account;
import com.tdtu.UserService.model.Role;
import com.tdtu.UserService.services.AccountService;

import lombok.Data;

@RestController
@RequestMapping(path="/api/users")
public class AccountController {
	
	@Autowired
	private AccountService userService;
	
	@GetMapping(value = { "", "/" })
    public Iterable<Account> getProducts() {
        Iterable<Account> users = userService.getAllAccount();
        return users;
    }

    @PostMapping(value = {"/register"})
    public ResponseEntity registerAccount(@RequestBody AccountDTO accountDTO) {
        return ResponseEntity.ok().body(userService.registerNewUserAccount(accountDTO));
   }
    
    @PostMapping(value = {"/login"})
    public ResponseEntity loginAccount(@RequestAttribute("username") String username,@RequestAttribute("password") String password ) {
        return ResponseEntity.ok().body(userService.login(username,password));
   }

    @PostMapping("/roles/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        return ResponseEntity.ok().body(userService.saveRole(role));
    }

	@PostMapping("/roles/addtouser")
	public ResponseEntity<?> addRoleToAccount(@RequestBody RoleToAccountForm form) {
		userService.addRoletoAccount(form.getUsername(), form.getRoleName());
	    return ResponseEntity.ok().build();
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
