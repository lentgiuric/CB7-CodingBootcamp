function es1() {
    

    function msgFunction() {
        let message = prompt("Scrivi un testo");
        parag.textContent = message;
        alert("Le diamo il bevenuto sulla nostra pagina!");
    }

  
       



let parag = document.querySelector(".text");
let button = document.querySelector(".btn");
button.addEventListener('click', msgFunction)

    

}
es1();


let input1 = document.querySelector(".input1");
let subBtn = document.querySelector(".sub_btn");
let parag2 = document.querySelector(".text2");

subBtn.addEventListener('click', fun);


function fun() {
    parag2.textContent = input1.value;
    
}