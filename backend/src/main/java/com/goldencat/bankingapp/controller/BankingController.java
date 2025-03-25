package com.goldencat.bankingapp.controller;

import com.goldencat.bankingapp.model.Account;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/banking")
public class BankingController {

    private List<Account> accounts = new ArrayList<>(); // In-memory storage for simplicity
    private Random random = new Random();

    // Generate a unique 10-digit account number
    private String generateAccountNumber() {
        StringBuilder accountNumber = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            accountNumber.append(random.nextInt(10));
        }
        return accountNumber.toString();
    }

    @PostMapping("/create-account")
    public ResponseEntity<?> createAccount(
            @RequestParam String accountHolder,
            @RequestParam String address,
            @RequestParam String occupation,
            @RequestParam String nextOfKin,
            @RequestParam String bvn) {
        // Validate BVN (must be 11 digits)
        if (!bvn.matches("\\d{11}")) {
            return ResponseEntity.status(400).body("Invalid BVN: Must be an 11-digit number");
        }

        // Check if BVN already exists
        if (accounts.stream().anyMatch(a -> a.getBvn().equals(bvn))) {
            return ResponseEntity.status(400).body("BVN already in use");
        }

        Long newId = (long) (accounts.size() + 1);
        String accountNumber = generateAccountNumber();
        Account account = new Account(newId, accountNumber, accountHolder, address, occupation, nextOfKin, bvn, 0.0);
        accounts.add(account);
        return ResponseEntity.ok(account);
    }

    @PostMapping("/deposit")
    public ResponseEntity<Account> deposit(@RequestParam Long accountId, @RequestParam double amount) {
        Account account = accounts.stream().filter(a -> a.getId().equals(accountId)).findFirst().orElse(null);
        if (account == null) {
            return ResponseEntity.status(404).body(null);
        }
        account.setBalance(account.getBalance() + amount);
        return ResponseEntity.ok(account);
    }

    @PostMapping("/withdraw")
    public ResponseEntity<Account> withdraw(@RequestParam Long accountId, @RequestParam double amount) {
        Account account = accounts.stream().filter(a -> a.getId().equals(accountId)).findFirst().orElse(null);
        if (account == null || account.getBalance() < amount) {
            return ResponseEntity.status(400).body(null);
        }
        account.setBalance(account.getBalance() - amount);
        return ResponseEntity.ok(account);
    }

    @GetMapping("/accounts")
    public ResponseEntity<List<Account>> getAccounts() {
        return ResponseEntity.ok(accounts);
    }
}