import {cE, qS, qA, createList, createPersonaList, BASE_URL, GET, POST, DELETE, todoList, formTodo} from "./function.js"






formTodo.addEventListener("submit", (e) =>{

    e.preventDefault();

    

    if(e.target[0].value.length <= 1){
        alert("Inserisci una frase")   
    } else {
        todoList.append(createPersonaList(e.target[0].value))
    }

    e.target[0].value="";

})




GET().then((data) => {

    data.todos.forEach((element) => {

        console.log(element)
        todoList.append(createList(element));

    })

})