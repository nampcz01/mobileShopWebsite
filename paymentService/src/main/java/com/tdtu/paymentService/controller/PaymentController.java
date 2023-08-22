package com.tdtu.paymentService.controller;


import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdtu.paymentService.model.Account;
import com.tdtu.paymentService.model.Transaction;
import com.tdtu.paymentService.service.PaymentService;

@RestController
@RequestMapping(path="/api/payments")
public class PaymentController {
	
	@Autowired
	public PaymentService paymentService;
	
	@GetMapping(value = { "", "/accounts/" })
    public Iterable<Account> getAccounts() {
        Iterable<Account> accounts = paymentService.getAccounts();
        return accounts;
    }
	
	@GetMapping(value = {"/accounts/{id}"})
    public Account getProduct(@PathVariable Long id) {
		Account account = paymentService.getAccountById(id);
        return account;
    }
	
	@PostMapping(value = {"/accounts/create"})
    public ResponseEntity<Account> create(@RequestBody Account account) {
		paymentService.saveAccount(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }
	
	@PostMapping(value = {"/accounts/update"})
    public ResponseEntity<Account> update(@RequestBody Account account) {
		paymentService.saveAccount(account);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }
	
	@PostMapping(value = {"/accounts/checkBalance"})
    public boolean checkBalance(@RequestBody Map<String, Long> requestBody) {
		Long userId = requestBody.get("userId");
		Long amount = requestBody.get("amount");
		return paymentService.checkBalance(userId , amount);
    }
	
	@PostMapping(value = {"/accounts/pay"})
    public boolean pay(@RequestBody Map<String, Long> requestBody) {
		Long userId = requestBody.get("userId");
		Long amount = requestBody.get("amount");
		return paymentService.payment(userId , amount);
    }

	@GetMapping(value = { "", "/transactions/" })
    public Iterable<Transaction> getTransactions() {
        Iterable<Transaction> transactions = paymentService.getAllTransactions();
        return transactions;
    }
	
	@GetMapping(value = { "", "/transaction/" })
    public Iterable<Transaction> getTransactionsByUserId(@RequestBody Map<String, Long> requestBody) {
		Long userId = requestBody.get("userId");
        Iterable<Transaction> transactions = paymentService.getTransactionsByUserId(userId);
        return transactions;
    }
	
	@PostMapping(value = {"/accounts/recharge"})
    public boolean recharge(@RequestBody Map<String, Long> requestBody) {
		Long userId = requestBody.get("userId");
		Long amount = requestBody.get("amount");
		return paymentService.recharge(userId , amount);
    }
	
	
}
