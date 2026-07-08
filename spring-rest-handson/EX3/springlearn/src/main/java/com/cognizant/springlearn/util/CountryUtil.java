package com.cognizant.springlearn.util;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryUtil {

    private static ApplicationContext context;

    public static ApplicationContext getContext() {

        if (context == null) {
            context = new ClassPathXmlApplicationContext("country.xml");
        }

        return context;
    }
}