import { credenziali } from "./dati.js";


export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

// create form of login
const formLogin = cE("form")
formLogin.className = "formLogin";

// div of form
let mainDiv = cE("div")
mainDiv.className = "mainDiv";




const BASE_URL = 'https://dummyjson.com';

export const GET = async (endpoint) => {

    let res = await fetch(BASE_URL + endpoint);
    let data = await res.json();

    return data

}


// create login modal
const loginPage = () => {



    let nameInput = cE("input")
    nameInput.setAttribute("type", "text");

    let password = cE("input")
    password.setAttribute("type", "password");

    let submit = cE("input")
    submit.setAttribute("type", "submit");


    formLogin.append(nameInput, password, submit);
    mainDiv.appendChild(formLogin);

    return mainDiv

}


// create user cart
const userCart = (obj) => {


    let cartContainer = cE("div");
    cartContainer.className = "cartContainer";

    let producTitle = cE("h2");
    producTitle.textContent = obj.title;

    let price = cE("h3");
    price.textContent = obj.price;

    // let productDescription = cE("p");

    cartContainer.append(producTitle, price)

    return cartContainer

}

// welcome user
const userWelcome = (stringa) => {

    let welcomeDiv = cE("div");
    welcomeDiv.className = "welcome";

    let saluto = cE("h1");

    saluto.textContent = "Carrello di: " + stringa;

    welcomeDiv.appendChild(saluto);

    return welcomeDiv

} 



// root selection
let root = qS(".root");
root.append(loginPage());



formLogin.addEventListener("submit", (e) => {

    e.preventDefault();
    
    const isAuth = credenziali.find(
        (user) =>
          user.username === e.srcElement[0].value &&
          user.password === e.srcElement[1].value
      );

      

            if(
               isAuth
            ) {

                root.removeChild(loginPage());
                
                GET(`/carts/${isAuth.id}`).then((data) => {

                    // console.log(isAuth.username);
                    root.appendChild(userWelcome(isAuth.username))

                    data.products.forEach(element => {
                        root.append(userCart(element));
                    });
                    // // root.append(userCart(data))
                    
                    


                })
            } else (
                console.log("non funziona ")
            )


})

