package com.cognizant;

public class MyService {
    
    public String getMessage() {
        return "Hello from MyService";
    }
    
    public boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    public String getUserById(int id) {
        if (id == 1) {
            return "John";
        }
        return null;
    }

    public static void main(String[] args) {
        MyService service = new MyService();
        System.out.println(service.getMessage());
        System.out.println("Is 4 even? " + service.isEven(4));
        System.out.println("User 1: " + service.getUserById(1));
    }
}