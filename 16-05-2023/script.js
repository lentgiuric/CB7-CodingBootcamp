import {cE, qS, qSA, productConstructor, modalConstructor} from "./function.js";


let rootContainer = qS(".rootCard");
let modalMain = qS(".modal_main");

let products = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
    };



fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((elem) =>
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

  });



// modalMain.append(modalConstructor(products))












