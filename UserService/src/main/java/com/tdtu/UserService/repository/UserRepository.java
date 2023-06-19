package com.tdtu.UserService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdtu.UserService.model.User;


@Repository
public interface UserRepository extends JpaRepository<User,Long>{
	
	User findByUsername(String username);

}
