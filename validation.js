let validityScore = 0

export const addScore = () => {
    return validityScore
}

export const isValidCountry = (value) => {
    validityScore = 0
    if (value !== 'not selected') {
        validityScore++
        return true
    } else {
        return false
    }
}

export const isRatingSelected = (value) => {
    if (Number(value) > 0) {
        validityScore++
        return true
    } else {
        return false
    }
}

export const isDateSelected = (value) => {
    return value !== ""
}

export const isDatePast  = (value) => {
    const dateEntered = Math.ceil(new Date(value).getTime()/(1000 * 60 * 60 * 24))
    const dateToday = Math.ceil(new Date().getTime()/(1000 * 60 * 60 * 24))
    return dateToday > dateEntered
}

export const isValidDate = (value) => {
    if (isDateSelected(value) && isDatePast(value)) {
        validityScore++
        return true
    } else {
        return false
    }
}
