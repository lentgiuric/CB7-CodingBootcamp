

let sum = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let mul = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

let calc = (a,b, number) => number(a,b);


const qS = (selector)=> document.querySelector(selector);
const qA = (selector)=> document.querySelectorAll(selector);

let btn1 = qS("#one")
let btn2 = qS("#two");
let btn3 = qS("#three");
let btnPlus = qS("#plus");
let btnMulti = qS("#multi");
let btn4 = qS("#four");
let btn5 = qS("#five");
let btn6 = qS("#six");
let btnMin = qS("#minus");
let btnDivi = qS("#divi");
let btn7 = qS("#seven");
let btn8 = qS("#eight");
let btn9 = qS("#nine");
let btnCanc = qS("#canc");
let btn0 = qS("#zero");
let btnEqual = qS("#equal");
let screen = qS(".calculator_screen");



const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    plus: "+",
    minus: "-",
    mult: "*",
    div: "/"
}

let operator;
let num1;
let num2;

function fun() {
    

btn1.addEventListener("click", () => {screen.value = screen.value + obj.one});

btn2.addEventListener("click", () => {screen.value = screen.value + obj.two});

btn3.addEventListener("click", () => {screen.value = screen.value + obj.three});

btn4.addEventListener("click", () => {screen.value = screen.value + obj.four});

btn5.addEventListener("click", () => {screen.value = screen.value + obj.five});

btn6.addEventListener("click", () => {screen.value = screen.value + obj.six});

btn7.addEventListener("click", () => {screen.value = screen.value + obj.seven});

btn8.addEventListener("click", () => {screen.value = screen.value + obj.eight});

btn9.addEventListener("click", () => {screen.value = screen.value + obj.nine});

btn0.addEventListener("click", () => {screen.value = screen.value + obj.zero});

btnPlus.addEventListener("click", () => {screen.value = screen.value + obj.plus});

}


fun();



btnPlus.addEventListener("click", () => {
    num1 = screen.value;
    operator = "+";
    console.log(num1);
    console.log(operator);
    screen.value = "";
});


btnMin.addEventListener("click", () => {
    num1 = screen.value;
    operator = "-";
    console.log(num1);
    console.log(operator);
    screen.value = "";
});

btnMulti.addEventListener("click", () => {
    num1 = screen.value;
    operator = "*";
    console.log(num1);
    console.log(operator);
    screen.value = "";
});


btnDivi.addEventListener("click", () => {
    num1 = screen.value;
    operator = "/";
    console.log(num1);
    console.log(operator);
    screen.value = "";
});



btnEqual.addEventListener("click", () => {
 
    num2 = screen.value;
    
    switch (operator) {
        case "+":
            screen.value = parseInt(num1) + parseInt(num2)
            break;
        case "-":
                screen.value = parseInt(num1) - parseInt(num2)
                break;
        case "*":
                    screen.value = parseInt(num1) * parseInt(num2)
                    break;
        case "/":
                    screen.value = parseInt(num1) / parseInt(num2)
                    break;
        default:
            screen.value = "Error!";
            break;
    }
});


btnCanc.addEventListener("click", () => screen.value = "");





















