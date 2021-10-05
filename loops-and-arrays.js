// ==========================================
// DONE Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
let numberOfNames = names.length;

for (i = 0; i < numberOfNames; i++) {
    console.log(names[i] + 'je');
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// DONE Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

//Aljona's commentaar:
//Variant 1.
const numbers = [2, 4, 5, 29, 38];
let  numberOfNumbersInArray = numbers.length;
let multiplyNumber = 3;

for (i = 0; i < numberOfNumbersInArray; i++) {
    console.log(numbers[i] * multiplyNumber);
}
// Aljona's commentaar:
// Je kan deze code op een andere manier schrijven en de code wordt korter (zie Variant 2), maar met het gebruiken
// van de code uit Variant 1 kan je makelijk (indien nodig) let multiplyNumber aanpassen naar een ander gewenst getal.
// Variant 2 van de code:
//
// const numbers = [2, 4, 5, 29, 38];
// let  numberOfNumbersInArray = numbers.length;
//
// for (i = 0; i < numberOfNumbersInArray; i++) {
//     console.log(numbers[i] * 3);
// }

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// DONE Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================



// Aljona's commentaar:
// We weten dat een vierkant altijd gelijke lengte, breedte en hoogte heeft. Daarom kan je een code op déze manier
// schrijven:
// Variant 1.
//
const squares = [30, 2, 8, 24, 11];
let numberOfSquares = squares.length;

for (i = 0; i < numberOfSquares; i++) {
    console.log(Math.pow (squares[i], 3)); // hier verheffen we tot 3de graad
}

// Aljona's commentaar:
// Variant 2.
//
// const squares = [30, 2, 8, 24, 11];
// let numberOfSquares = squares.length;
//
// for (i = 0; i < numberOfSquares; i++) {
//     console.log(squares[i] * squares[i] * squares[i]);
// }

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
