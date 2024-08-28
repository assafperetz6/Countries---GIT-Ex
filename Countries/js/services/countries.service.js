'use strict'

function getCountryByName(name, cb) {
    const countries = loadFromStorage('countries') || {}
    
    if (countries[name]) return cb(countries[name])
    else {
        $.get(`https://restcountries.com/v3.1/name/${name}`, country => {
            countries[name] = country
            saveToStorage('countries', countries)
            cb(country)
        })
    }
}

function getCountryByCode(code, cb) {
    const countriesByCodes = loadFromStorage('countriesByCodes') || {}

    if (countriesByCodes[code]) return cb(countriesByCodes[code])
    else {
        $.get(`https://restcountries.com/v3.1/alpha/${code}`, country => {
            countriesByCodes[code] = country
            saveToStorage('countriesByCodes', countriesByCodes)
            cb(country)
            console.log(countriesByCodes)
            
        })
    } 
}

function clearCache() {
    const countries = {}
    const countriesByCodes = {}

    saveToStorage('countries', countries)
    saveToStorage('countriesByCodes', countriesByCodes)
}