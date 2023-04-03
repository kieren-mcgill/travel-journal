import {COUNTRY_KEY, countryNameInput, countryRatingInput, dateVisitedInput, editMode} from './main';

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
    //Create elements in the card
    const card = document.createElement('div')
    const image = document.createElement('img')
    const cardBody = document.createElement('div')
    const title = document.createElement('h5')
    const ratingScore = document.createElement('p')
    const btnBox = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')

    const dateStamp = document.createElement("div")
    const dateStampDate = document.createElement('p')

//Nest the card elements
    cardContainerEl.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(ratingScore)
    cardBody.appendChild(btnBox)
    btnBox.appendChild(editBtn)
    btnBox.appendChild(deleteBtn)
    card.appendChild(dateStamp)
    dateStamp.appendChild(dateStampDate)

    //Set the CSS/Bootstrap classes for each card element
    card.classList.add('card', 'm-3')
    image.classList.add('card-img-top')
    image.src=`${countryObject.image}`
    editBtn.classList.add('edit-btn', 'btn', 'btn-sm', 'btn-outline-warning')
    deleteBtn.classList.add('btn', 'btn-sm', 'btn-outline-danger')
    dateStamp.classList.add('date-stamp')


//Set the contents for each card element
    dateStampDate.textContent = countryObject.date
    title.textContent = `${countryObject.flag}   ${countryObject.name}`
    const stars = () => {
        let starString = ""
        for (let i = 1; i <= countryObject.rating; i++) {
            starString = starString + '⭐';
        }
        return starString
    }
    ratingScore.textContent = `Rating: ${stars()}`
    deleteBtn.textContent = 'Delete'
    editBtn.textContent = 'Edit'

    //Define the actions for each button
    const deleteCountry = () => {
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
        editMode.push(countryObject.image)
        console.log(editMode)
        countryNameInput.value = countryObject.name
        dateVisitedInput.value = countryObject.date
        countryRatingInput.value = countryObject.rating
        countryNameInput.disabled = true
        deleteCountry()
    }
}




