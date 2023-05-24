const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);


let statics = qS(".statics");
let dinamics = qS(".dinamics");
let formTodo = qS(".todo_form");
let inputTodo = qS(".todo_input");
let todoSubmit = qS(".todo_submit");



// creare la lista todo
const createList = (pippo) => {

    let todoItems = cE("li");
    todoItems.setAttribute("id", pippo.id)

    let listContainer = cE("div");
    listContainer.className = "list_container";

    let parag = cE("p");
    parag.textContent = pippo.todo;

    let delButton = cE("button");
    delButton.textContent = "X";

    delButton.addEventListener("click", () => {

        console.log(pippo.id)
        const eliminare = document.getElementById(pippo.id);
        eliminare.remove();
        

    });

    listContainer.append(parag,delButton);
    todoItems.append(listContainer);

    return todoItems;

}


const BASE_URL = `https://dummyjson.com/todos`;

const GET = async (endpoint = "") => {
    let res = await fetch(BASE_URL + endpoint);
    let data = await res.json();

    return data;
}


const DELETE = async (endpoint = "") => {

    const res = await fetch(BASE_URL + endpoint, {
        method: 'DELETE'}
        );
     const data = await res.json();

     return data;

}


formTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    
        console.log(e.target[0].value)
        if(e.target[0].value.length <= 0){
            alert("Inserisci una frase")   
        } else {
            dinamics.appendChild(createList(e.target[0].value))
            e.target[0].value = "";
        }

});




GET().then((data) => {

    let todoArr = data.todos;

    console.log(todoArr)

    //  statics.append(createList(data.todo))
     todoArr.forEach((type) => {

        dinamics.append(createList(type))

    })

})


DELETE(BASE_URL + )


