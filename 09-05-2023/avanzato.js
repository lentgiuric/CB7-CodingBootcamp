let inputAv = document.querySelector(".input_list");
let btnAv = document.querySelector(".add_btn");


btnAv.addEventListener('click', addElem);

function addElem() {
    let listAv = document.querySelector(".elements_list");
    let list = document.createElement("li");
    list.textContent = inputAv.value;

    listAv.appendChild(list);
    inputAv.value = "";
}
    


