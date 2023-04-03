import {isValidCountry, isDateSelected, isDatePast, isValidDate, isRatingSelected, isImageSize} from './validation'

describe('isValidCountry', () => {
    test('returns true if a country has been selected', () => {
        const result = isValidCountry('United Kingdom');
        expect(result).toEqual(true)
    });

    test('returns false if a country has not been selected', () => {
        const result = isValidCountry('not selected');
        expect(result).toEqual(false)
    });
})

describe('isRatingSelected', () => {
    test('returns true if a star rating has been selected', () => {
        const result = isRatingSelected(3);
        expect(result).toEqual(true)
    });

    test('returns false if a country has not been selected', () => {
        const result = isRatingSelected(0);
        expect(result).toEqual(false)
    });
})

describe('isDateSelected', () => {
    test('returns true if a date in the past has been selected', () => {
        const result = isDateSelected('2022-02-15');
        expect(result).toEqual(true)
    });

    test('returns true if a date in the future has been selected', () => {
        const result = isDateSelected('2028-03-27');
        expect(result).toEqual(true)
    });

    test('returns false if a country has not been selected', () => {
        const result = isDateSelected('');
        expect(result).toEqual(false)
    });
})

describe('isDatePast', () => {
    test('returns true if selected date is in the past', () => {
        const result = isDatePast('2022-02-15');
        expect(result).toEqual(true)
    });

    test('returns true if a date in the future has been selected', () => {
        const result = isDatePast('2028-03-27');
        expect(result).toEqual(false)
    });
})

describe('isValidDate', () => {
    test('returns true if selected date is in the past', () => {
        const result = isValidDate('2022-02-15');
        expect(result).toEqual(true)
    });

    test('returns false if a date in the future has been selected', () => {
        const result = isValidDate('2028-03-27');
        expect(result).toEqual(false)
    });

    test('returns false if a country has not been selected', () => {
        const result = isValidDate('');
        expect(result).toEqual(false)
    });
})

describe('isImageSize', () => {
    test('returns true if an image file is no more than 10kb', () => {
        const result = isImageSize(1509);
        expect(result).toEqual(true)
    });

    test('returns false if an image file is more than 10kb', () => {
        const result = isImageSize(12004);
        expect(result).toEqual(false)
    });
})

