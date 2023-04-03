import {countryNameInput, countryRatingInput, dateVisitedInput, countryArray, COUNTRY_KEY} from './main'

export const newCountryObject = (imageUrl) => {
    const countryInfo = countryArray.find((country) => country.name === countryNameInput.value)
    const countryObject = {
        name: countryInfo.name,
        flag: countryInfo.flag,
        code: countryInfo.code,
        date: dateVisitedInput.value,
        rating: countryRatingInput.value,
        image: imageUrl
    }
    const gotArray  = JSON.parse(localStorage.getItem(COUNTRY_KEY))
    gotArray.push(countryObject.code)
    localStorage.setItem(COUNTRY_KEY, JSON.stringify([...new Set(gotArray)]))
    localStorage.setItem(countryInfo.code, JSON.stringify(countryObject))
}