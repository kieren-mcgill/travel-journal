
export const isValidCountry = (value) => {
    return value !== 'not selected'
}

export const isRatingSelected = (value) => {
    return Number(value) > 0;
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
    return isDateSelected(value) && isDatePast(value)
}