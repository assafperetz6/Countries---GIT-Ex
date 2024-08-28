'use strict'

function onGetCountryInfo() {
    const elTxtInput = document.querySelector('input')
    
    getCountryByName(elTxtInput.value, renderInfo)
    toggleLoaderAndInfo()
}

function onGetCountryByCode(code) {
    getCountryByCode(code, renderInfo)
    toggleLoaderAndInfo()
}

function renderInfo(rawData) {
    const { name, flags, population, area, maps, borders } = rawData[0]

    const elCountryInfo = document.querySelector('section')
    const elName = elCountryInfo.querySelector('h2')
    const elFlag = elCountryInfo.querySelector('img')
    const elPopulation = elCountryInfo.querySelector('.population')
    const elArea = elCountryInfo.querySelector('.area')
    const elMap = elCountryInfo.querySelector('.map')
    const elNegList = document.querySelector('.neighbors')
    const htmlStr = borders.map(code => {
     return `
     <li onclick="onGetCountryByCode('${code}')">${code}</li>`   
    }).join('')

        
    elNegList.innerHTML = htmlStr
    elName.innerHTML = `Name: <span>${name.common}</span>`
    elFlag.src = flags.png
    elPopulation.innerHTML = `Population<br><span>${population}</span>`
    elArea.innerHTML = `Area<span><br>${area}</span>`
    elMap.innerHTML = `<a href="${maps.googleMaps}"><img src=./icons/google-maps-2020-icon.svg></a>`

    toggleLoaderAndInfo()
}

function toggleLoaderAndInfo() {
    const elInfoContainer = document.querySelector('.info-container')
    const elLoader = document.querySelector('.loader')

    elInfoContainer.classList.toggle('hidden')
    elLoader.classList.toggle('hidden')
}

function onClearCache() {
    clearCache()
    console.log(localStorage.countries)
}