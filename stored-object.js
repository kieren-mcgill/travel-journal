import {COUNTRY_KEY} from './main'

export const newCountryObject = (inputtedValues) => {
    const countryObject = {
        name: inputtedValues.name,
        flag: inputtedValues.flag,
        code: inputtedValues.code,
        date: inputtedValues.date,
        rating: inputtedValues.rating,
        log: inputtedValues.log,
        image: inputtedValues.image,
        stampTop: `${Math.floor(Math.random()*75)}px`,
        stampLeft: `${Math.floor(Math.random()*175)}px`,
        stampTurn: `${Math.floor((Math.random()*60))-30}deg`
    }
    const gotArray  = JSON.parse(localStorage.getItem(COUNTRY_KEY))
    gotArray.push(countryObject.code)
    localStorage.setItem(COUNTRY_KEY, JSON.stringify([...new Set(gotArray)]))
    localStorage.setItem(countryObject.code, JSON.stringify(countryObject))
}