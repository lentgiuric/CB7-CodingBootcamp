//Sulla base della lezione del giorno, costruire una array di oggetti, 
//in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. 
//La seguente lista deve essere renderizzata sul DOM e non su console.log. 
//Attenzione: non scrivere in modo statico alcun elemento 
//(il body della pagina HTML sarà vuoto)





const cE = (element) => document.createElement(element); 
const qS = (selector) => document.querySelector(selector);
const qA = (selectorA) => document.querySelectorAll(selectorA);





let btn = cE("button");
btn.className = "btn"
btn.textContent = "Aggiungi Commento"

let inp = cE("input");
inp.className = "insComment"
inp.setAttribute("placeholder", "Scrivi un commento")



document.body.append(inp, btn)


let myList = cE("ul");
myList.className = "comment";
document.body.appendChild(myList);




btn.addEventListener("click", (e) => {


    if(inp.value !== "") {
        let myListItem = cE("li");
        myListItem.className = "comment_item"
        myList.appendChild(myListItem);
        myListItem.textContent = inp.value;
    } else{
        
    }
    
    inp.value = "";

});



/*  Utilizzo di forEach


const myObjectList = [
    {
        id: 1,
        descrizione: "Questo è il primo commento della lista"

    },
    {
        id: 2,
        descrizione: "Questo è il secondo commento della lista"

    },
    {
        id: 3,
        descrizione: "Questo è il terzo commento della lista"

    }
];



myObjectList.forEach(content => {

    

    let myListItem = cE("li");
    myListItem.className = "comment_item"
    myList.appendChild(myListItem);
    myListItem.textContent = content.descrizione;

});


*/





































// inp.addEventListener("input", (e) => console.log(e.target.value)
// );


// btn.addEventListener("click", (event) => {

//     let myListItem = cE("li");
//     myListItem.className = "comment_item"
//     myList.appendChild(myListItem);

//     myListItem.textContent = event.target.value;
//     inp.value = "";

// });


// myObjectList.forEach(somet => {

//     let myList = cE("ul");
//     myList.className = "comment";

//     let myListItem = cE("li");
//     myListItem.className = "comment_item";

//     myList.appendChild(myListItem);
//     document.bodyif (inp.value !== "") {
//     let myListItem = cE("li");
//     myListItem.className = "comment_item"
//     myList.appendChild(myListItem);

//     myListItem.textContent = inp.value;
//     inp.value = "";

// } else {
//     //do nothing
// }.appendChild(myList);
//     console.log(somet.descrizione);
    
//     myListItem.textContent = somet.descrizione;

// });




// 