package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class BankAccountTest {

    @Test
    void testDeposit() {
        // Arrange
        BankAccount account = new BankAccount(1000.0);
        
        // Act
        account.deposit(500.0);
        
        // Assert
        assertEquals(1500.0, account.getBalance());
    }

    @Test
    void testWithdraw() {
        // Arrange
        BankAccount account = new BankAccount(1000.0);
        
        // Act
        account.withdraw(300.0);
        
        // Assert
        assertEquals(700.0, account.getBalance());
    }

    @Test
    void testWithdrawInsufficientBalance() {
        // Arrange
        BankAccount account = new BankAccount(100.0);
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            account.withdraw(200.0);
        });
    }

    @Test
    void testDepositNegativeAmount() {
        // Arrange
        BankAccount account = new BankAccount(100.0);
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            account.deposit(-50.0);
        });
    }
}
