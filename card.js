import {COUNTRY_KEY, countryNameInput} from './main';

const cardContainerEl = document.getElementById('card-container')

export const populateCards = () => {
    cardContainerEl.innerHTML = ''
    const countryArray = JSON.parse(localStorage.getItem(COUNTRY_KEY))
    countryArray.forEach((code) => {
        const countryObject = JSON.parse(localStorage.getItem(code))
        makeCard(countryObject)
    })
}

export const makeCard = (countryObject) => {
    const classCard = document.createElement('div')
    const cardHeader = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const titleFlag = document.createElement('h1')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    cardTitle.textContent = countryObject.name
    titleFlag.textContent = countryObject.flag
    deleteBtn.textContent = 'Delete'
    editBtn.textContent = 'Edit'
    cardHeader.appendChild(cardTitle)
    cardHeader.appendChild(titleFlag)
    classCard.appendChild(editBtn)
    classCard.appendChild(cardHeader)
    classCard.appendChild(deleteBtn)
    cardContainerEl.appendChild(classCard)

    const deleteCountry =() => {
        const gotArray = JSON.parse(localStorage.getItem(COUNTRY_KEY))
        const deletedArray = gotArray.filter((country) => country !== countryObject.code)
        localStorage.setItem(COUNTRY_KEY, JSON.stringify(deletedArray))
        localStorage.removeItem(countryObject.code)
    }

    deleteBtn.onclick = (event) => {
        event.preventDefault()
        deleteCountry()
        populateCards()
    }

    editBtn.onclick = (event) => {
        event.preventDefault()
        countryNameInput.value = countryObject.name
        countryNameInput.disabled = true
        deleteCountry()
    }

}







