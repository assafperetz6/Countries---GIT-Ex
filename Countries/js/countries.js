'use strict'

function onGetCountryInfo() {
    const elTxtInput = document.querySelector('input')

    getCountryInfo(elTxtInput.value, renderInfo)
}

function renderInfo(rawData) {
    const elCountryInfo = document.querySelector('pre')
    const { name, capital, borders, maps, flags } = rawData[0]
    
    // const formatedData = 

    elCountryInfo.innerText = [name.common, capital[0], ...borders, maps.googleMaps, flags.svg].join(' ')
    console.log()
    
}

function getCountryInfo(country, cb) {
    $.get(`https://restcountries.com/v3.1/name/${country}`, cb)
}