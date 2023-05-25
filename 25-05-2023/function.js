export const cE =  (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qA = (el) => document.querySelector(el)

export const todoList = qS(".todo_list");
export const formTodo = qS(".formlist");


// create list (async)
export const createList = (paperino) =>{

    let todo_item = cE("li");
    todo_item.setAttribute("id", paperino.id);
    console.log(paperino.id);
    
    let parag = cE("p");
    parag.textContent = paperino.todo;

    let delButton = cE("button");
    delButton.textContent = "X";

    delButton.addEventListener("click", () => {
        // let delEl = document.querySelector(element.id);
        todo_item.remove();
        DELETE(`/${paperino.id}`)
    })

    todo_item.append(parag, delButton);


    return todo_item;

}



// create personal list (sincron) 
export const createPersonaList = (pippo) =>{

    let todo_item = cE("li");
    
    let parag = cE("p");
    parag.textContent = pippo;

    let delButton = cE("button");
    delButton.textContent = "X";

    delButton.addEventListener("click", () => {
        // let delEl = document.querySelector(element.id);
        todo_item.remove();
    })


    todo_item.append(parag, delButton);


    return todo_item;

}



// BASE_URL
export const BASE_URL = `https://dummyjson.com/todos`;


// GET METHOD
export const GET = async (endpoint = "") => {

    let res = await fetch(BASE_URL + endpoint).then((res) => {

        try {
    
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Errore")
            }
        
        } catch (error) {
            
            return console.log("Ciaoo")
        
        }
            

    })

    let data = await res;

    return data




}


// POST METHOD
export const POST = async (endpoint = "" ) => {

    let res = await fetch( BASE_URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: '',
            
  })
}).then((res) => {

    try {

        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Errore")
        }
    
    } catch (error) {
        
        return console.log("Ciaoo")
    
    }
        

})

let data = await res;

return data


}


// DELETE METHOD
export const DELETE = async (endpoint = "" ) => {
    let res = await fetch(BASE_URL + endpoint, {
        method: 'DELETE',
    })

    let data = res.json();

    return data
}




