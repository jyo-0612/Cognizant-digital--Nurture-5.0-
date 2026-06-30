package com.cognizant;

public class Calculator {
    
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
    
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return (double) a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Add: " + calc.add(2, 3));
        System.out.println("Subtract: " + calc.subtract(5, 2));
        System.out.println("Multiply: " + calc.multiply(4, 3));
        System.out.println("Divide: " + calc.divide(10, 2));
    }
}