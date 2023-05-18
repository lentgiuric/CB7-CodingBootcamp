import {cE, qS, qSA, productConstructor, modalConstructor, cartArr } from "./function.js";


let rootContainer = qS(".rootCard");
let modalMain = qS(".modal_main");
let productObj = [];
export let cartProducts = [];

let cart = qS(".cart");
let cartContainer = qS(".cart_container");


fetch("https://dummyjson.com/products")
  .then((pippo) => { 

    return pippo.json()})
  .then((data) => {
    console.log(data);
    productObj = data.products;
    productObj.forEach((paperino) =>
    rootContainer.append(productConstructor(paperino)))
  })
    .then(() => {
    let cardAll = qSA(".card");
    console.log(cardAll)
    cardAll.forEach( (pippo) => {
      pippo.addEventListener("click", () => 
      fetch(`https://dummyjson.com/products/${pippo.id}`)
          .then((res) => res.json())
          .then((data) => modalMain.append(modalConstructor(data, modalMain))))
    })
  })
  .then(() => {




    
    
    })



    cart.addEventListener("click", () => {


      if (cartArr.length > 0) {

      cartContainer.textContent = "";

      cartContainer.classList.toggle("cart_show")

      cartArr.forEach( (product) => {

        let content = cE("div");
        content.className = "modal_content";

        let par = cE("p");
        let imgCart = cE("img");
        imgCart.src = product.thumbnail;
        par.textContent = product.title;
        content.append(par,imgCart);
        cartContainer.append(content);

    


      })
  

    }

      console.log("ciao")

    });




// modalMain.append(modalConstructor(products))












