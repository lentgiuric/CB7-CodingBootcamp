


//
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const mod = (num1, num2) => num1 % num2;

//
const calculator = (a,b, operation) => operation(a,b);




const qSel = (selector) => document.querySelector(selector);

const num1 = qSel(".number1");
const num2 = qSel(".number2");
const operator = qSel(".operator");
const calc = qSel(".calc");
let result = qSel(".result");

result.textContent = 


calc.addEventListener("click", fun);

function fun() {
    // if (operator.value == "+") {
        
    //     result.textContent = "Il risultato del''operazione è: " + calculator(parseInt(num1.value), parseInt(num2.value), sum)
    // } else {
    //     console.log("ciao");
    // }


    switch (operator.value) {
        case "+":
                result.textContent = "Il risultato del''operazione è: " + calculator(parseInt(num1.value), parseInt(num2.value), sum)           
            break;
        case "-":
                result.textContent = "Il risultato del''operazione è: " + calculator(parseInt(num1.value), parseInt(num2.value), sub)
        default:
            break;
        case "*":
                result.textContent = "Il risultato del''operazione è: " + calculator(parseInt(num1.value), parseInt(num2.value), mult)           
            break;
        case "/": 
                result.textContent = "Il risultato del''operazione è: " + calculator(parseInt(num1.value), parseInt(num2.value), div)           
            break;
            console.log("Noooo");
            break;
    }






}