package com.tdtu.userService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.userService.entity.Account;

import java.util.Optional;

public interface UserCredentialRepository  extends JpaRepository<Account,Integer> {
    Optional<Account> findByName(String username);
}
