package com.tdtu.paymentService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdtu.paymentService.model.Transaction;


@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long>{

}
