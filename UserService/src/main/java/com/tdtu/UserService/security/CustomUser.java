package com.tdtu.UserService.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.tdtu.UserService.model.Account;

import lombok.Data;

@Data
public class CustomUser extends User {

    private final String name;
    private final String email;
    private final String locale;

    public CustomUser(String username, String password, Collection<? extends GrantedAuthority> authorities, Account user) {
        super(username, password, authorities);
        this.name = user.getUsername();
        this.email = user.getEmail();
		this.locale = null;
    }

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getLocale() {
		return locale;
	}
    
    
    
}

