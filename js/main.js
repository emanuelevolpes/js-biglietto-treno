'use strict';
/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca!


//chiedo all'utente il numero di chilometri che vuole percorrere tramite il prompt (utilizzo num per forzare l'utente a inserire un numero);

//chiedo all'utente l'età del passeggero tramite il prompt (utilizzo num per forzare l'utente a inserire un numero);

//calcolo il prezzo del biglietto in base ai km (0.21 * numero di chilometri);

//verifico che l'età del passeggero sia minore di 18
    //applico lo sconto del 20% ((prezzo * 20) / 100);
        ALTRIMENTI
            //verifico che l'età del passeggero sia maggiore di 65
                //applico lo sconto del 40% ((prezzo * 40) / 100);
                    ATRIMENTI
                        //non applico nessuno sconto;

//stampo il prezzo finale utilizzando parseFloat(num).toFixed(2); per visualizzare la cifra con due decimali;*/

const numeroChilometri = Number(prompt("inserisci il numero di chilometri che vuoi percorrere"));

const etaPasseggero = parseInt(prompt("inserisci l'età del passeggero"));

console.log (
    `
    vuoi percorrere ${numeroChilometri} Km
     hai ${etaPasseggero} anni
     `
);

let prezzoBiglietto = (0.21 * numeroChilometri);

if (etaPasseggero < 18){
    (prezzoBiglietto * 0.20);
} else if (etaPasseggero > 65){
    (prezzoBiglietto * 0.40);
} else {
    (prezzoBiglietto);
};

console.log ('il prezzo del biglietto è', parseFloat(prezzoBiglietto).toFixed(2));