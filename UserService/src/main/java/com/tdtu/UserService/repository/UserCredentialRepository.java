package com.tdtu.UserService.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.UserService.entity.Account;


public interface UserCredentialRepository  extends JpaRepository<Account,Integer> {
    Optional<Account> findByName(String username);
    Optional<Account> findByEmail(String email);
}
