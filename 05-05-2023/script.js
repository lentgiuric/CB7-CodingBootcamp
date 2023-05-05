//ESERCIZIO 2 : Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.

/*
let firstNum = parseInt(prompt("Inserisci il primo numero"));

let secondNum = parseInt(prompt("Inserisci il secondo numero"));

let operator = prompt("Inserisci un operatore matematico");


function sum() {

    console.log(firstNum + secondNum);

}


function sott() {
    console.log(firstNum - secondNum);
}



function multi() {
    console.log(firstNum * secondNum);
}


function divi() {
    console.log(firstNum / secondNum);
}



switch (operator) {
    case '+': 
                sum();
        break;
    case '-': 
                sott();
        break;
    case '*': 
                multi();
        break;
    case '/': 
                divi();
        break;

    default:  console.log("Inserisci un operatore valido");
}
*/




// ----------------------------------------------------------------------------------------------------------------




// ESERCIZIO 3: scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni.

/*

let mySelf = {

    nome: "Giuseppe",
    cognome: "Lentini",
    eta: "24",
    altezza: "1.75m",
    capelli:  {
            colore: "neri",
            tipo: "ricci"
        },
    hobbie: ["musica", "dev", "cucina", "sport"],
}

let whoIam = "Ciao! Sono: " + mySelf.nome + " " + mySelf.cognome + " ho " + mySelf.eta + " anni ";
let Other = "I miei Capelli Sono: " + mySelf.capelli.colore + " e " + mySelf.capelli.tipo;
let passions =  mySelf.hobbie;



console.log(whoIam);
console.log(Other);
console.log(...passions);

*/



// ------------------------------------------------------------------------------------------------------------------------



// AVANZATO: Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.

//                 --------  PRIMA SOLUZIONE ---------              


/*
function calculator1(firstNumber, secondNumber, operator) {

    function sum() {

        console.log(firstNumber + secondNumber);
    
    }
    
    
    function sott() {
        console.log(firstNumber - secondNumber);
    }
    
    
    
    function multi() {
        console.log(firstNumber * secondNumber);
    }
    
    
    function divi() {
        console.log(firstNumber / secondNumber);
    }

    firstNumber = parseInt(prompt("Inserisci il primo numero"));
    
    secondNumber = parseInt(prompt("Inserisci il secondo numero"));

    operator = prompt("Inserisci un operatore matematico");


            function operations() {

                    switch (operator) {
                        case '+': 
                                    sum();
                            break;
                        case '-': 
                                    sott();
                            break;
                        case '*': 
                                    multi();
                            break;
                        case '/': 
                                    divi();
                            break;
    
                        default:  console.log("Inserisci un operatore valido");
                    }
            }


        return operations();

}

calculator1();
*/




//                   --------  SECONDA SOLUZIONE ---------

/*

function calculator2() {

    firstNumber = parseInt(prompt("Inserisci il primo numero"));
    
    secondNumber = parseInt(prompt("Inserisci il secondo numero"));

    operator = prompt("Inserisci un operatore matematico");

    
    
        
    function sum() {

        console.log(firstNumber + secondNumber);
    
    }
    
    
    function sott() {
        console.log(firstNumber - secondNumber);
    }
    
    
    
    function multi() {
        console.log(firstNumber * secondNumber);
    }
    
    
    function divi() {
        console.log(firstNumber / secondNumber);
    }

    function error() {
        console.log("Inserisci un operatore valido")
    }
        
    

   
                function operations () {
                    if (operator === "+") {
                        sum();
                    } else if (operator === "-") {
                        sott();
                    } else if (operator === "/") {
                        divi();
                    } else if (operator === "*") {
                        multi();
                    } else {
                        error();
                    }
                
                }

            return operations();
}


calculator2();
*/