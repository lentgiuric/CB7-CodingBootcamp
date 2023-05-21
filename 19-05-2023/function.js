import {login,} from "./script.js";
// import {credenziali} from "./dati.js"


export let cartArr = [];

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (el) => document.querySelectorAll(el);



// Login modal elements
export let inputButton = cE("input");
inputButton.type = "submit";
inputButton.value = "Submit"
inputButton.className = "inputLoginButton";

export let form = cE("form");
form.className = "loginForm";
// End Login modal elements




// Product constructor
export let productConstructor = (product) => {

    let card = cE("div");
        card.className = "card";
        card.setAttribute("id", product.id)

    
    let cardImg = cE("div");
        cardImg.className = "cardImg";
            let cardBackgroud = cE("img");
            cardBackgroud.src = product.thumbnail;
        cardImg.appendChild(cardBackgroud);


    let cardContent = cE("div");
    cardContent.className = "cardContent";
            let cardTitle = cE("h2");
            cardTitle.className = "cardTitle";
            cardTitle.textContent = product.title;
            let cardDescription = cE("p")
            cardDescription.className = "cardDescription";
            cardDescription.textContent = product.description;
            // let cardButton = cE("button");
            // cardButton.className = "cardButton";
            // cardButton.textContent = "Acquista ora"


            let price = cE("p");
            price.className = "price";
            price.textContent = "$" + product.price;


        cardContent.append(cardTitle, cardDescription, price);
        cardImg.appendChild(cardBackgroud);
    card.append(cardImg, cardContent);



return card

};



// Modoal constructor
export let modalConstructor = (product, parent) => {

let modalDiv = cE("div");
    modalDiv.className = "modal_div";

    let imgDiv = cE("div")
        imgDiv.className = "modal_img_div";
        let modalImg = cE("img")
            modalImg.src = product.thumbnail;
            modalImg.alt = product.title;
    
    let modalInfo = cE("div");
    modalInfo.className = "modal_info";
        
        let textDiv = cE("div")
            textDiv.className = "modal_text_div";
            let modalTitle = cE("h2");
            modalTitle.textContent = product.title;
            let modalParag = cE("p");
            modalParag.textContent = product.description;

        let buttonDiv = cE("div");
            buttonDiv.className = "modal_buttons"
            let buyButton = cE("button")
            buyButton.className = "modal_buy";
            buyButton.textContent = "Buy now";
            let backButton = cE("button");
            backButton.textContent = "Torna indietro";
            backButton.className = "modal_back";

            
            
            buyButton.addEventListener("click", () => {
                cartArr.push(product)
                console.log(cartArr)
        })
            // .addEventListener("click", () => {

            //     cartProducts.push(product)
            //     parent.removeChild(modalDiv)


            //     cartProducts.forEach( (elem) => {

            //         let content = cE("div");
            //         content.className = "modal_content";
            //         let parag  = cE("p");
            //         parag.textContent = product.description;
            //         let imgCart = cE("img");
            //         className = "imgCart";
            //         imgCart.src = elem.thumbnail

            //         content.append(parag, imgCart);
            //         cart.appendChild(content);

            //     } )

            //   })
  

            backButton.addEventListener("click", () => {
                parent.removeChild(modalDiv)
            })

buttonDiv.append(buyButton, backButton);
textDiv.append(modalTitle, modalParag);
modalInfo.append(textDiv, buttonDiv);
imgDiv.append(modalImg);
modalDiv.append(imgDiv, modalInfo);

return modalDiv

}


// Loginpage constructor


               // inizialmente in pagina deve apparire solo la modale login
               // successivamente se i dati corrispondono far apparire la pagina -> display none alla pagina, al click se o dati corrispondono display flex

export let loginCostructor = () => {


        

        let loginTitle = cE("h2");
        loginTitle.textContent = "Inserisci i tuoi dati";

        let inputName = cE("input")
        inputName.type = "text";
        inputName.placeholder = "Name"
        
        let inputPassword = cE("input")
        inputPassword.type = "password";
        inputPassword.placeholder = "Password";
       
        

        form.append(loginTitle, inputName, inputPassword, inputButton);
        login.appendChild(form);


}


