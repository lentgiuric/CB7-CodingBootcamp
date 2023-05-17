import {cE, qS, qSA, productConstructor, modalConstructor} from "./function.js";


let rootContainer = qS(".rootCard");
let modalMain = qS(".modal_main");
let searchProducts = qS(".navbar__search");
let buttonCategories = document.querySelectorAll(".button_categories");
let newProduct = [];


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    newProduct = data.products;
    newProduct.forEach((elem) =>
    rootContainer.append(productConstructor(elem))
    
    )

    let cardAll = qSA(".card");
    console.log(cardAll)
    cardAll.forEach( (pippo) => {
      pippo.addEventListener("click", () => 
      fetch(`https://dummyjson.com/products/${pippo.id}`)
          .then((res) => res.json())
          .then((data) => modalMain.append(modalConstructor(data))))
    })

    searchProducts.addEventListener("input", (e) =>{
    

        newProduct.filter((product) =>
          product.description.toLowerCase().includes(e.target.value.toLowerCase())
        ).forEach((obj) => rootContainer.append(productConstructor(obj)));
    
    
    })

});








