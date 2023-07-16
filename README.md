# Cocktail Bar

## Inleiding

Het vinden van een cocktailrecept kan vaak een moeilijk en omslachtig proces kan zijn. Er zijn talloze websites en boeken met recepten, maar deze zijn vaak moeilijk te navigeren.  De cocktailapp is bedoeld om Bezoekers een eenvoudige en intuïtieve manier te bieden om hun favoriete of nog nieuw te ontdekken cocktails te vinden, te bereiden en te genieten. De applicatie maakt gebruik van een externe databron om cocktailrecepten terug te geven. Het doel van deze applicatie is om gebruikers een breed scala aan cocktailrecepten te bieden.

![screenshot-singlepage](src/assets/screenshot-singlepage.png)
## NOVI Backend

De backend gebouwd door NOVI draait op een Heroku server. Deze backend ondersteunt alleen het registeren, inloggen en aanpassen van gebuikers. Deze server wordt automatisch inactief wanneer er een tijdje geen requests gemaakt worden. De eerste request die de server weer uit de 'slaapstand' haalt zal daarom maximaal 30 seconden op zich kunnen laten wachten. Daarna zal de responsetijd normaal zijn. Daarom heb ik een test-request in het registreer formulier gezet. Let op: de database met gebruikers wordt vaak binnen één uur weer geleegd. Het is dus mogelijk dat u na verloop tijd opnieuw moet registreren.

# Installatiehandleiding
## Applicatie starten
Als u het project gecloned hebt naar uw locale machine, installeer u eerst de `node_modules` door het volgende
commando in de terminal te runnen:

```
npm install
```

Wanneer dit klaar is, kunt u de applicatie starten met behulp van:

```
npm start
```

of gebruik de WebStorm knop (npm start). Open [http://localhost:3000](http://localhost:3000/) om de pagina in de browser
te bekijken. 

## Andere beschikbare scripts
```
npm update
```
Dit commando update de dependencies
```
control + C`
```
Dit commando stopt het programma





## Benodigdheden
#### Een runtime environment zoals Webstorm. Een API key is niet noodzakelijk.
#### Registratie is noodzakelijk hiervoor is het volgende nodig 
#### • Een leuke username
#### • Een emailadres (mag verzonnen zijn)
#### • Een onhackbaar wachtwoord zoals bv 123456 ;-)
#### De React.StrictMode van React zet favorieten dubbel in de favorieten lijst. Optie is om dat uit te zetten (committen)
## Niet nodig maar wel handig
#### • Een goed humeur
#### • Een paar flessen sterke drank

## Link naar de Github repository
```
https://github.com/wimtheijken/frontend-eindopdracht-cocktail-app
```


