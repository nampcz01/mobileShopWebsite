package com.tdtu.paymentService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tdtu.paymentService.model.Transaction;


@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long>{
	
	@Query("SELECT p FROM Transaction p WHERE p.fromId LIKE %?1% OR p.toId LIKE %?1%")
    public List<Transaction> getTransactionByUserId(long userId);

}
