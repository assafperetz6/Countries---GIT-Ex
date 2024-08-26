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
            saveNegCountries(country)
        })
    }
}

function saveCountryCodes() {
    const countriesByCodes = loadFromStorage('countriesByCodes') || {}

    $.get(`https://restcountries.com/v3.1/all`, data => {
        data.map(country => countriesByCodes[country.cca2] = country.name.common)
    })

    saveToStorage('countriesByCodes', countriesByCodes)
}

function getCountryByCode(code, cb) {

}

function clearCache() {
    const countries = {}

    saveToStorage('countries', countries)
}