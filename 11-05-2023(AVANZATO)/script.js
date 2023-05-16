const cE = (element) => document.createElement(element); 
const qS = (selector) => document.querySelector(selector);
const qA = (selectorA) => document.querySelectorAll(selectorA);


let container = cE("div");
container.className = "container";



let myList = cE("ul");
myList.className = "comment";

let myListItem = cE("li");
myListItem.className = "comment_item"
// myList.appendChild(myListItem);

document.body.appendChild(myList);

document.body.appendChild(container);






























// let btn = cE("button");
// btn.className = "btn"
// btn.textContent = "Aggiungi Commento"

// let inp = cE("input");
// inp.className = "insComment"
// inp.setAttribute("placeholder", "Scrivi un commento")



// document.body.append(inp, btn)


// let myList = cE("ul");
// myList.className = "comment";
// document.body.appendChild(myList);




// btn.addEventListener("click", (e) => {


//     if(inp.value !== "") {
//         let myListItem = cE("li");
//         myListItem.className = "comment_item"
//         myList.appendChild(myListItem);
//         myListItem.textContent = inp.value;
//     } else{
        
//     }
    
//     inp.value = "";

// });









































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