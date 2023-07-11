package com.tdtu.userService.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.userService.entity.Account;


public interface UserCredentialRepository  extends JpaRepository<Account,Integer> {
    Optional<Account> findByName(String username);
}
