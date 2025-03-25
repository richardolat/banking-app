package com.goldencat.bankingapp.model;

public class Account {
    private Long id;
    private String accountNumber; // New field for unique account number
    private String accountHolder;
    private String address;
    private String occupation;
    private String nextOfKin;
    private String bvn;
    private double balance;

    public Account(Long id, String accountNumber, String accountHolder, String address, String occupation, String nextOfKin, String bvn, double balance) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.address = address;
        this.occupation = occupation;
        this.nextOfKin = nextOfKin;
        this.bvn = bvn;
        this.balance = balance;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getAccountNumber() { return accountNumber; }
    public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
    public String getAccountHolder() { return accountHolder; }
    public void setAccountHolder(String accountHolder) { this.accountHolder = accountHolder; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
    public String getNextOfKin() { return nextOfKin; }
    public void setNextOfKin(String nextOfKin) { this.nextOfKin = nextOfKin; }
    public String getBvn() { return bvn; }
    public void setBvn(String bvn) { this.bvn = bvn; }
    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }
}