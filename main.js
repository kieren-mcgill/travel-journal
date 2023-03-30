import './bootstrap.css';
import './style.css';
import {isValidCountry, isValidDate, isRatingSelected} from "./validation.js";
import { getList } from 'country-list-with-dial-code-and-flag';

//npm package containing details of each country in the world
const countryArray = getList()

//DOM elements
const formEl  = document.getElementById('new-country')
const countryNameInput = document.getElementById('country-name')
const dateVisitedInput = document.getElementById('date-visited')
const countryRatingInput = document.getElementById('country-rating')

//Create country drop-down menu
const countryList  = countryArray.map((country) => country.name)
countryList.forEach((country) => {
    const option = document.createElement('option')
    option.textContent = country
    option.setAttribute('value', country)
    countryNameInput.appendChild(option)
})

//Display whether submitted entry is valid

const countryValidDisplay = () => {
    const value = countryNameInput.value
    countryNameInput.classList.remove('is-valid,', 'is-invalid')
    isValidCountry(value) ? countryNameInput.classList.add('is-valid'):
        countryNameInput.classList.add('is-invalid')
}

const dateValidDisplay = () => {
    const value = dateVisitedInput.value
    dateVisitedInput.classList.remove('is-valid,', 'is-invalid')
    isValidDate(value) ? dateVisitedInput.classList.add('is-valid'):
        dateVisitedInput.classList.add('is-invalid')
}

const ratingsValidDisplay = () => {
    const value = countryRatingInput.value
    countryRatingInput.classList.remove('is-valid', 'is-invalid')
    isRatingSelected(value) ? countryRatingInput.classList.add('is-valid'):
        countryRatingInput.classList.add('is-invalid')
}

//Refactor the above into one function

formEl.onsubmit = (event) => {
    event.preventDefault()
    countryValidDisplay()
    dateValidDisplay()
    ratingsValidDisplay()
    console.log(dateVisitedInput.value)
}

