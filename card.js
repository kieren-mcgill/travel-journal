import {COUNTRY_KEY, countryNameInput, countryRatingInput, dateVisitedInput, imageUpload, logEntry} from './main';

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
    const logBtn = document.createElement('button')
    const logPara = document.createElement('p')

    const deleteIcon = document.createElement('i')
    const editIcon = document.createElement('i')
    const logIcon = document.createElement('i')

    const dateStamp = document.createElement("div")
    const dateStampDate = document.createElement('p')

//Nest the card elements
    cardContainerEl.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(ratingScore)
    cardBody.appendChild(btnBox)
    btnBox.appendChild(logBtn)
    btnBox.appendChild(editBtn)
    btnBox.appendChild(deleteBtn)
    deleteBtn.appendChild(deleteIcon)
    editBtn.appendChild(editIcon)
    logBtn.appendChild(logIcon)
    card.appendChild(dateStamp)
    dateStamp.appendChild(dateStampDate)
    document.getElementById('form-container').appendChild(logPara)

    //Set the CSS/Bootstrap classes for each card element
    card.classList.add('card', 'm-3')
    image.classList.add('card-img-top')
    editBtn.classList.add('edit-btn', 'btn', 'btn-sm', 'btn-outline-primary')
    deleteBtn.classList.add('btn', 'btn-sm', 'btn-outline-danger')
    logBtn.classList.add('btn', 'btn-sm', 'btn-outline-success')
    deleteIcon.classList.add('fa-solid', 'fa-trash')
    editIcon.classList.add('fa-solid', 'fa-pen-to-square')
    logIcon.classList.add('fa-solid', 'fa-book-open')
    dateStamp.classList.add('date-stamp')
    dateStampDate.classList.add('date-stamp-date')
    title.classList.add('card-element')
    ratingScore.classList.add('card-element')
    btnBox.classList.add('card-element')
    logPara.classList.add('log-para')

    dateStamp.style.setProperty('top', `${countryObject.stampTop}`)
    dateStamp.style.setProperty('left', `${countryObject.stampLeft}`)
    dateStamp.style.setProperty('transform', `rotate(${countryObject.stampTurn})`)

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

    image.src = `${countryObject.image}`

    logPara.innerHTML = `${countryObject.date}<br>${countryObject.name}<br>${countryObject.log}`

    //Define the actions for each button
    const deleteCountry = () => {
        const gotArray = JSON.parse(localStorage.getItem(COUNTRY_KEY))
        const deletedArray = gotArray.filter((country) => country !== countryObject.code)
        localStorage.setItem(COUNTRY_KEY, JSON.stringify(deletedArray))
        localStorage.removeItem(countryObject.code)
    }

    logBtn.onclick = () => {
        if (logPara.style.display === 'none') {
            logPara.style.display = 'block'
        } else {
            document.querySelectorAll('.log-para').forEach((log) => log.style.display = 'none')
        }
    }

    deleteBtn.onclick = (event) => {
        event.preventDefault()
        deleteCountry()
        populateCards()
    }

    editBtn.onclick = (event) => {
        event.preventDefault()
        logPara.style.display = 'none'
        countryNameInput.value = countryObject.name
        dateVisitedInput.value = countryObject.date
        countryRatingInput.value = countryObject.rating
        logEntry.value = countryObject.log
        countryNameInput.disabled = true;
        document.getElementById('image-url-hidden').value = countryObject.image
        dateVisitedInput.classList.add('edit-mode')
        countryRatingInput.classList.add('edit-mode')
        imageUpload.classList.add('edit-mode')
        logEntry.classList.add('edit-mode')
        document.getElementById('form-title').textContent = 'Edit a country'
        deleteCountry()
    }
}




