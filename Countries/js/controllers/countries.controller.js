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

    
    elName.innerHTML = `Name: <span>${name.common}</span>`
    elFlag.src = flags.png
    elPopulation.innerHTML = `Population: <span>${population}</span>`
    elArea.innerHTML = `Area: <span>${area}</span>`
}