import {COUNTRY_KEY} from './main'

export const newCountryObject = (inputtedValues) => {
    const countryObject = {
        name: inputtedValues.name,
        flag: inputtedValues.flag,
        code: inputtedValues.code,
        date: inputtedValues.date,
        rating: inputtedValues.rating,
        image: inputtedValues.image
    }
    const gotArray  = JSON.parse(localStorage.getItem(COUNTRY_KEY))
    gotArray.push(countryObject.code)
    localStorage.setItem(COUNTRY_KEY, JSON.stringify([...new Set(gotArray)]))
    localStorage.setItem(countryObject.code, JSON.stringify(countryObject))
}