'use strict'

function onGetCountryInfo() {
    const elTxtInput = document.querySelector('input')

    getCountryInfo(elTxtInput.value, renderInfo)
}

function renderInfo(rawData) {
    const { name, flags, population, area } = rawData[0]

    const elCountryInfo = document.querySelector('section')
    const elName = elCountryInfo.querySelector('h2')
    const elFlag = elCountryInfo.querySelector('img')
    const elPopulation = elCountryInfo.querySelector('.population')
    const elArea = elCountryInfo.querySelector('.area')

    
    elName.innerText = `Name: ${name.common}`
    elFlag.src = flags.png
    elPopulation.innerText = `Population: ${population}`
    elArea.innerText = `Area: ${area}`
}

function getCountryInfo(country, cb) {
    $.get(`https://restcountries.com/v3.1/name/${country}`, cb)
}