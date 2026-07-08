package com.cognizant.springlearn.util;

import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.springlearn.model.Country;

public class CountryUtil {

    private static ClassPathXmlApplicationContext context;

    static {
        context = new ClassPathXmlApplicationContext("country.xml");
    }

    @SuppressWarnings("unchecked")
    public static List<Country> getCountries() {

        return (List<Country>) context.getBean("countryList");

    }

    public static Country getCountry(String code) {

        List<Country> countries = getCountries();

        for (Country country : countries) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }

        }

        return null;

    }

}