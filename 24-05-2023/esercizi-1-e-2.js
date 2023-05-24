
/*    ------- ESERCIZIO 1 -----------

Supponiamo di avere un array con le seguenti informazioni: nome, cognome e paese di origine di una persona.

let persona = ["Mario", "Rossi", "Italia"];

Usando il destructuring, crea tre variabili separate (nome, cognome e paese) a partire dall'array "persona".
*/



let persona = ["Mario", "Rossi", "Italia"];

const [primo, secondo, terzo] = persona;



/*    ------- ESERCIZIO 2 -----------

Supponiamo di avere un oggetto che rappresenta un libro con le seguenti proprietà: titolo, autore e anno di pubblicazione.

  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980
};
Usando il destructuring, crea tre variabili separate (titolo, autore, anno) a partire dall'oggetto "libro".

*/

const book =   {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    anno: 1980
};


const {titolo, autore, anno} =  shortBook;