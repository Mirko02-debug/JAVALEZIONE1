/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.


/* SCRIVI QUI LA TUA RISPOSTA */
*/
/* in Javascript per datatype si intendono i tipi di valori che possiamo trovare in una variabile:
Number, rappresenta i numeri. 
ESEMPIO: let cars: 40;
String, rappresenta quello che dal linguaggio macchina viene riconosciuto come una parola scritta
ESEMPIO: let name= "Mirko";
Boolean, rappresenta un valore che può essere vero o falso. 
ESEMPIO: let staPiovendo= true;
Undefined, rappresenta una variabile che viene dichiarato ma senza un valore scritto.
ESEMPIO: let x;
Null,rappresenta una variabile dove il valore viene lasciato intenzionalmente vuoto dopo =.
let scarpe=. */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

/* SCRIVI QUI LA TUA RISPOSTA */
/* Immagina di essere un allenatore di basket con una scheda contentente le statistiche di un giocatore durante la stagione, un'oggetto in Javascript è come una di queste schede.
let giocatore = {
  nome: "LeBron James",
  altezza: 203, // Altezza in centimetri
  posizione: "ala grande",
  puntiPerPartita: 25.2,
  rimbalziPerPartita: 7.8,
  assistPerPartita: 9.6
};
In questo esempio, la nostra scheda (l'oggetto giocatore) contiene diverse proprietà, come nome, altezza, posizione, puntiPerPartita, rimbalziPerPartita e assistPerPartita, ciascuna con i propri valori al suo interno. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 30;

let somma = a + b;
console.log(somma); // Stampa: 42


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Mirko";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 3;
let somma = x - y;
console.log(somma); // Stampa: 9

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

let sonoDiverse = name1 !== name2;
console.log(sonoDiverse); // Stampa: true

let name1 = "john";
let name2 = "John";

let sonoUguali = name1.toLowerCase() === name2.toLowerCase();
console.log(sonoUguali); // Stampa: true


