export function checkAmountLetters(search) {
    const length = search.length
    if (length === 1) {
        return 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
    } else {
        return 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    }
}