
// Exercicis repàs examen

// Exercici 16.2

for ( let i = 5; i <= 20; i++ ){
    console.log (i);
}

// Exercici 16.3

let N = parseInt ( prompt ( "Escriu un nombre superior a 1" ) );
let suma = 0;

for ( let i = 1; i <= N; i++ ) {
    suma += i;
}

console.log ( suma );

// Exercici 16.4

let N = parseInt ( prompt ( "Escriu un nombre superior a 1" ) );
let fact = 1;

for ( let i = 1; i <= N; i++ ) {
    fact *= i;
}

console.log ( fact );


// Exercici 16.5

let N = parseInt ( prompt ( "Escriu un nombre: " ) );
let M = parseInt ( prompt ( "Escriu un nombre superior a N" ) );
let suma = 0;

for ( let i = N; i <= M, i++ ) {
    suma += i;
}

console.log (suma);


// Exercici 16.6

let N = parseInt ( prompt ( "Escriu un nombre: ") );
let suma = 0;

for ( let i = 2; i <= N; i++) {
    if ( i % 2 == 0 ) {
        suma += i; 
    }
}

console.log (suma);


// Exercici 16.7

let N = parseInt ( prompt ("Escriu un nombre: ") );
let taula = 0;

for ( let i = 0; i <= 10; i++) {
    taula = i * N;
    console.log (taula);
}


//Exercici 16.9

let N = parseInt ( prompt ( "Escriu un nombre: ") );
let res = "";

for ( let i = 1; i <= N; i++) {
    res += "*";
}

console.log (res);


// Exercici 17.2

let i = 5;

while ( i <= 20 ) {
    console.log (i);
    i++;
}


// Exercici 17.3

let N = parseInt ( prompt ( "Escriu un nombre: " ) );

while ( N >= 1 ) {
    console.log (N);
    N--;
}


// Exercici 15.2 

let recipient = prompt("Introdueix 'c' per conus o 't' per terrina:");
let sabor = prompt("Escull el sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds o Ametlles:");

let preu = 0;

if (recipient === "c"){
    preu = 3.45;
}
else if (recipient === "t"){
    preu = 3.95;
}
else {
    console.log ("Error dades mal introduïdes" );
}


// Exercici 14.5

let num1 = parseInt ( prompt ( "Escriu un numero: " ) );
let num2 = parseInt ( prompt ( "Escriu un altre: " ) );
let num3 = parseInt ( prompt ( "Escriu un altre: " ) );

if ( num1 >= num2 && num1 >= num3 ) {
    console.log ("El numero més alt és el numero ", num1 );
}
else if (num2 >= num3) {
    console.log ("El numero més alt és el numero ", num2 );
}
else {
    console.log ("El numero més alt és el numero ", num3 );
}


// Exercici 14.6

let carnet = prompt ( "Tens carnet de conduir? " );
let valor = parseFloat ( prompt ( "Quin valor has donat? " ) );

if ( carnet === "si" && valor <= 0.25 ) {
    console.log ("Pot conduir");
}
else {
    console.log ("No pot conduir");
}


// Exercici 14.7

let num1 = parseInt ( prompt ( "Escriu un numero: " ) );
let num2 = parseInt ( prompt ( "Escriu un altre numero: " ) );

if (num1 >= num2 ) {
    console.log ( num1 - num2 );
}
else {
    console.log ( num2 - num1 );
}


// Exercici 14.8

let total = parseFloat ( prompt ( "Total a pagar: " ) );

if ( total >= 30 ) {
    console.log ("Transport gratis, preu final: ", total);
}
else {
    console.log ("Transport 4.95€, preu final: ", total + 4.95 );
}


// Exercici 16.11

let N = parseInt ( prompt ( "Escriu un nombre: " ) );
let res = "";

for ( let i = 1; i <= N; i++) {
    res += "*";
    console.log (res);
}


