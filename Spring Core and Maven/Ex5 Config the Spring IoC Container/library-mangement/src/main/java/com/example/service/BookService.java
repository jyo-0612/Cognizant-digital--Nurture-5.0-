package com.example;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Book Service: Displaying Book Details...");
        bookRepository.displayBook();
    }
}