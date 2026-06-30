package com.cognizant;

public class Main {
    public static void main(String[] args) {
        System.out.println("Running Calculator and MyService...");
        
        Calculator calc = new Calculator();
        System.out.println("--- Calculator ---");
        System.out.println("Add 10 + 5 = " + calc.add(10, 5));
        System.out.println("Subtract 10 - 5 = " + calc.subtract(10, 5));
        System.out.println("Multiply 10 * 5 = " + calc.multiply(10, 5));
        System.out.println("Divide 10 / 5 = " + calc.divide(10, 5));
        
        System.out.println("\n--- MyService ---");
        MyService service = new MyService();
        System.out.println("Message: " + service.getMessage());
        System.out.println("Is 6 even? " + service.isEven(6));
        System.out.println("Is 7 even? " + service.isEven(7));
        System.out.println("User with ID 1: " + service.getUserById(1));
        System.out.println("User with ID 2: " + service.getUserById(2));
    }
}