package com.cognizant;

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        System.out.println("Initial: " + account.getBalance());
        
        account.deposit(500);
        System.out.println("After deposit: " + account.getBalance());
        
        account.withdraw(200);
        System.out.println("After withdraw: " + account.getBalance());
    }
}