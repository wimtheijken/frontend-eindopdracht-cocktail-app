export function getFilterType(filter) {

    switch (filter) {
        case 'categorie':
            return 'Categorie';
        case 'glas':
            return 'Type glas';
        case 'ingredient':
            return 'Ingrediënt';
        case 'alcohol':
            return 'Alcohol';
        default:
            return 'Oops.. Er is iets mis gegaan';
    }
}