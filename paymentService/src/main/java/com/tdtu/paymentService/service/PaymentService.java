package com.tdtu.paymentService.service;

import com.tdtu.paymentService.model.Account;
import com.tdtu.paymentService.model.Transaction;

public interface PaymentService {
	
	Account saveAccount(Account account);
	
	Iterable<Account> getAccounts();
	
	Account getAccountById(long id);
	
	boolean checkBalance(long userId,long amount);
	
	boolean payment(long userId,long amount);

	Iterable<Transaction> getAllTransactions();

	void createTransaction(long userId, long amount);
	

}
