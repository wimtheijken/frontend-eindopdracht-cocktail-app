export function checkFilterKey(key) {
    console.log(key)

    switch (key) {
        case 'Categorie':
            return 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
        case 'Type glas':
            return 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=';
        case 'Ingrediënt':
            return 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
        case 'Alcohol':
            return 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';
        default:
            return 'Oops.. Er is iets mis gegaan';
    }
}