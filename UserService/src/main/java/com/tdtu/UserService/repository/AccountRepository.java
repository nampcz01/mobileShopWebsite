package com.tdtu.UserService.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tdtu.UserService.model.Account;



public interface AccountRepository extends JpaRepository<Account,Long>{
	
	Account findByUsername(String username);
	
	@Query("SELECT u FROM Account u WHERE u.email = :email")
    Collection<Account> findByEmail(@Param("email") String email);
	
    @Modifying
    @Query("UPDATE Account u SET u.password=:password WHERE u.username=:username")
    Integer updatePassword(@Param("password") String password, @Param("username") String username);


}
