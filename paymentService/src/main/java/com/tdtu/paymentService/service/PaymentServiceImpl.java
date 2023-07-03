package com.tdtu.paymentService.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdtu.paymentService.model.Account;
import com.tdtu.paymentService.model.Transaction;
import com.tdtu.paymentService.repository.AccountRepository;
import com.tdtu.paymentService.repository.TransactionRepository;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	private static long SHOP_ACCOUNT_ID = 1;
	
	@Autowired
	private AccountRepository accountRepo;
	
	@Autowired
	private TransactionRepository transactionRepo;

	@Override
	public Account saveAccount(Account account) {
		return accountRepo.save(account);
	}

	@Override
	public Iterable<Account> getAccounts() {
		return accountRepo.findAll();
	}

	@Override
	public Account getAccountById(long id) {
		return accountRepo.findById(id).orElse(null);
	}

	@Override
	public boolean checkBalance(long userId, long amount) {
		Account account = getAccountById(userId);
		if(account != null) {
			if(account.getBalance() >= amount ) {
				return true;
			}
		}
		return false;
	}

	@Override
	public boolean payment(long userId, long amount) {
		Account account = getAccountById(userId);
		Account shop = getAccountById(SHOP_ACCOUNT_ID);
		if(account != null) {
			if(account.getBalance() >= amount ) {
				createTransaction(userId,amount);
				account.setBalance(account.getBalance() - amount);
				shop.setBalance(shop.getBalance() + amount);
				accountRepo.save(account);
				accountRepo.save(shop);
				return true;
			}
		}
		return false;
	}
	
	@Override
	public void createTransaction(long userId, long amount) {
		Transaction transfer = new Transaction();
		transfer.setFromId(userId);
		transfer.setToId(SHOP_ACCOUNT_ID);
		transfer.setDateTime(new Date());
		transfer.setAmount(amount);
		transactionRepo.save(transfer);
	}
	
	@Override
	public Iterable<Transaction> getAllTransactions() {
		return transactionRepo.findAll();
	}
	
	@Override
	public boolean recharge(long userId, long amount) {
		Account account = getAccountById(userId);
		account.setBalance(account.getBalance() + amount);
		accountRepo.save(account);
		return true;
	}
}
