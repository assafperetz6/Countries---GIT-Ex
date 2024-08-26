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

function getCountryByCode(code, cb) {
    const countries = loadFromStorage('countriesByCode') || {}

    if (countries[code]) return cb(countries[code])

    $.get(`https://restcountries.com/v3.1/alpha/${code}`, country => {
        countries[code] = country
        saveToStorage('countriesByCode', countries)
        cb(country)
    })
}

function clearCache() {
    const countries = {}

    saveToStorage('countries', countries)
}