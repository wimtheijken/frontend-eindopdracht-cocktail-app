# Cocktail applicatie handleiding

## inleiding

Het vinden van een cocktailrecept kan vaak een moeilijk en omslachtig proces kan zijn. Er zijn talloze websites en boeken met recepten, maar deze zijn vaak moeilijk te navigeren. Daarom wil ik een applicatie ontwikkelen die gebruikers in staat stelt om makkelijk cocktails kan vinden en cocktailrecepten kan teruggeven. De cocktailapp is bedoeld om Bezoekers een eenvoudige en intuïtieve manier te bieden om hun favoriete of nog nieuw te ontdekken cocktails te vinden, te bereiden en te genieten. De applicatie maakt gebruik van een externe databron om cocktailrecepten terug te geven met verschillende ingrediënten, stappen en technieken. Het doel van deze applicatie is om gebruikers een breed scala aan cocktailrecepten te bieden, waaronder traditionele en exotische recepten.

In dit document beschrijf ik het functionele ontwerp voor een applicatie die op basis van een API gebruik maakt van een externe databron om cocktailrecepten terug te geven. De applicatie zal de gebruiker in staat stellen om snel en eenvoudig verschillende cocktailrecepten te zoeken, te bekijken en te bereiden. De applicatie zal ook de mogelijkheid bieden om op basis van een aantal criteria zoals categorie, glastype, ingrediënten en soort drank, cocktailrecepten op te zoeken.

Het probleem is dat mensen niet altijd de tijd of het kennisniveau hebben om een goede cocktail te maken. Daarom hebben veel mensen behoefte aan een applicatie die hen helpt bij het vinden van een geschikt recept. Een applicatie voor cocktailrecepten zou gebruikers in staat stellen om de recepten te bekijken en te zoeken op basis van ingrediënten, smaak, of zelfs de naam van de cocktail. De applicatie stelt de gebruiker in staat om de perfecte cocktail te bereiden voor elke gelegenheid.

## NOVI Educational Backend

Deze backend is gebouwd door NOVI en mag alleen worden gebruikt voor opleidings-doeleinden.

Wanneer studenten de Frontend leerlijn volgen en een backend nodig hebben voor hun eindopdracht, kunnen zij ervoor kiezen om de NOVI backend te gebruiken. Deze backend ondersteunt alleen het registeren, inloggen en aanpassen van gebuikers. Het is niet mogelijk om andere informatie (naast email, gebruikersnaam, wachtwoord en role) op te slaan in deze database. Let op: de database met gebruikers wordt vaak binnen één uur weer geleegd.

De backend draait op een Heroku server. Deze server wordt automatisch inactief wanneer er een tijdje geen requests gemaakt worden. De eerste request die de server weer uit de 'slaapstand' haalt zal daarom maximaal 30 seconden op zich kunnen laten wachten. Daarna zal de responsetijd normaal zijn. Voer daarom altijd eerst een test-request uit.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
