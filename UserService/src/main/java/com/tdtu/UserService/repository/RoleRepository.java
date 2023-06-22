package com.tdtu.UserService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.UserService.model.Role;


public interface RoleRepository extends JpaRepository<Role,Long>{
	Role findByName(String name);
}
