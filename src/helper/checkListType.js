export function checkListType(filter) {

    switch (filter) {
        case 'categorie':
            return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        case 'glas':
            return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
        case 'ingredient':
            return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
        case 'alcohol':
            return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
        default:
            return 'Oops.. Er is iets mis gegaan';
    }
}