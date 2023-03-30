import './bootstrap.css';
import './style.css';
import {isValidCountry, isValidDate, isRatingSelected, addScore} from "./validation.js";
import {getList} from 'country-list-with-dial-code-and-flag';
import {newCountryObject} from './stored-object'
import { populateCards } from './card'

//npm package containing details of each country in the world
export const countryArray = getList()

//Set array of countries visited in local storage - recorded by country codes - only set to empty array if not already in local storage
export const COUNTRY_KEY = 'countries'
if (JSON.parse(localStorage.getItem(COUNTRY_KEY)) === null) {
    localStorage.setItem(COUNTRY_KEY, JSON.stringify([]))
}

//DOM elements
export const formEl = document.getElementById('new-country')
export const countryNameInput = document.getElementById('country-name')
export const dateVisitedInput = document.getElementById('date-visited')
export const countryRatingInput = document.getElementById(`country-rating`)

//Create country dropdown menu
countryArray.forEach((country) => {
    const option = document.createElement('option')
    option.textContent = country.name
    option.setAttribute('value', country.name)
    countryNameInput.appendChild(option)
})

//Display whether submitted entry is valid
const countryValidDisplay = () => {
    const value = countryNameInput.value
    countryNameInput.classList.remove('is-valid', 'is-invalid')
    isValidCountry(value) ? countryNameInput.classList.add('is-valid') :
        countryNameInput.classList.add('is-invalid')
}

const dateValidDisplay = () => {
    const value = dateVisitedInput.value
    dateVisitedInput.classList.remove('is-valid', 'is-invalid')
    isValidDate(value) ? dateVisitedInput.classList.add('is-valid') :
        dateVisitedInput.classList.add('is-invalid')
}

const ratingsValidDisplay = () => {
    const value = countryRatingInput.value
    countryRatingInput.classList.remove('is-valid', 'is-invalid')
    isRatingSelected(value) ? countryRatingInput.classList.add('is-valid') :
        countryRatingInput.classList.add('is-invalid')
}

const clearForm = () => {
    countryNameInput.value = 'not selected'
    dateVisitedInput.value = ''
    countryRatingInput.value = 0
    countryNameInput.classList.remove('is-valid')
    countryRatingInput.classList.remove('is-valid')
    dateVisitedInput.classList.remove('is-valid')
    countryNameInput.disabled = false
}

populateCards()

formEl.onsubmit = (event) => {
    event.preventDefault()
    countryValidDisplay()
    dateValidDisplay()
    ratingsValidDisplay()
    if (addScore() === 3) {
        newCountryObject()
        populateCards()
        clearForm()
    }
}

