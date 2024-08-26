'use strict'

function onGetCountryInfo() {
    const elTxtInput = document.querySelector('input')

    getCountryByName(elTxtInput.value, renderInfo)
}

function renderInfo(rawData) {
    const elCountryInfo = document.querySelector('pre')
    const { name, capital, borders, maps, flags } = rawData[0]

    elCountryInfo.innerText = [name.common, capital[0], ...borders, maps.googleMaps, flags.svg].join(' ')
    console.log()
    
}