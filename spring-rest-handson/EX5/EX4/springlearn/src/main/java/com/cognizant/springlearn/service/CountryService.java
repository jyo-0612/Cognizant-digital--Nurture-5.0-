package com.cognizant.springlearn.service;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.util.CountryUtil;

@Service
public class CountryService {

    ApplicationContext context = CountryUtil.getContext();

    @SuppressWarnings("unchecked")
    public List<Country> getAllCountries() {

        return (List<Country>) context.getBean("countryList");
    }

    public Country getCountry(String code)
            throws CountryNotFoundException {

        List<Country> countries = getAllCountries();

        for (Country country : countries) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }

        }

        throw new CountryNotFoundException();
    }

}