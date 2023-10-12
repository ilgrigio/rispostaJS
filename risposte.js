// 1) Che cos'è un algoritmo?
//    Un algoritmo è come fosse un percorso con segnalazioni ed indicazioni precise per arrivare ad una destinazione.

// 2) Cos'è una variabile?
//    Una variabile è come fosse un cassetto dove puoi metterci un solo tipo di oggetti (es. calzini). 
//    Per poter mettere altro, bisogna svuotarlo prima dei calzini. Solo allora si può riempire con altro (es. magliette).

// undefined e null sono la stessa cosa?
// No, "undefined" è una variabile vuota (nella quale non è stato ancora assegnato un valore).
// "Null" serve per svuotare il contenuto di una variabile

let provaPrimaVariabile
console.log (provaPrimaVariabile)

provaPrimaVariabile = 30
console.log (provaPrimaVariabile)

provaPrimaVariabile = null
console.log (provaPrimaVariabile)

provaPrimaVariabile = 50
console.log (provaPrimaVariabile)

let pasta = 80
let sugo = 30
let parmigiano = 15
let acqua = 5

let pentola
console.log ("Pentola nuova di zecca! " + pentola)

pentola = acqua + pasta // 5 + 80 = 85
console.log ("Valore della pentola con acqua + pasta: " + pentola)

pentola += sugo // Il contenuto precedente + 30 = 115
console.log ("Valore della pentola con acqua e pasta + sugo: " + pentola)

pentola += parmigiano
console.log ("Piatto di pasta finale: " + pentola)

