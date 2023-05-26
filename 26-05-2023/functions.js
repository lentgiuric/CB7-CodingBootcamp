export const cE =  (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qA = (el) => document.querySelector(el);


export let list = qS(".list");
export let todoForm = qS(".todo_list")



export const createList = (textvalue) => {


    let listItems = cE("li");
    listItems.className = ("list-item");
    listItems.textContent = textvalue


    list.appendChild(listItems);

    return listItems;
}



