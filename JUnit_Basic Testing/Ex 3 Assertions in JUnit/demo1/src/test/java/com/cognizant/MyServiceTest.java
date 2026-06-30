package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    MyService service = new MyService();

    @Test
    void testGetMessage() {
        String message = service.getMessage();
        assertNotNull(message);
        assertEquals("Hello from MyService", message);
    }

    @Test
    void testIsEven() {
        assertTrue(service.isEven(4));
        assertTrue(service.isEven(0));
        assertFalse(service.isEven(5));
        assertFalse(service.isEven(-3));
    }

    @Test
    void testGetUserById() {
        assertEquals("John", service.getUserById(1));
        assertEquals("Jane", service.getUserById(2));
        assertNull(service.getUserById(99));
    }
}
