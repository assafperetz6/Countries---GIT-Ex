'use strict'

function getCountryByName(name, cb) {
    const countries = loadFromStorage('countries') || {}
    console.log(countries);
    
    if (countries[name]) return cb(countries[name])
    else {
        $.get(`https://restcountries.com/v3.1/name/${name}`, country => {
            countries[name] = country
            saveToStorage('countries', countries)
            cb(country)
            console.log(countries);  
        })
    }
}