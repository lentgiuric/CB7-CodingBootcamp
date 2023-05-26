import {createList, cE, qA, qS, list, todoForm } from "./functions.js" 



let listEls = JSON.parse(localStorage.getItem("todoList") ) || [];


let ggg = ()=> {


    
}


todoForm.addEventListener("submit", (e) => {
    console.log(e)
    e.preventDefault();

    if(e.srcElement[0].value.length > 1) {
        createList(e.srcElement[0].value);
    } else {
        alert("Inserisci una frase daiii")
    }

    listEls.push({id : Math.floor(Math.random() *10000), text: e.srcElement[0].value})
    console.log(listEls)

    e.srcElement[0].value = "";

    localStorage.setItem("todoList", JSON.stringify(listEls))
}

   

)



listEls.forEach((elem) => {
    console.log(elem)
})







// {id : Math.floor(Math.random() *10000), text: e.srcElement[0].value}