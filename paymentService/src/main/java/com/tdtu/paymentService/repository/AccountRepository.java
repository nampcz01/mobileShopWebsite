package com.tdtu.paymentService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tdtu.paymentService.model.Account;


@Repository
public interface AccountRepository extends JpaRepository<Account,Long>{
	@Query("SELECT o FROM Account o WHERE o.userId = ?1")
    public List<Account> getAccountById(Long userId);

}
