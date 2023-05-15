export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);





export let productConstructor = (product) => {

    let card = cE("div");
        card.className = "card";

    // card.textContent = products.title;
    
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
            let cardButton = cE("button");
            cardButton.className = "cardButton";
            cardButton.textContent = "Acquista ora"

            let price = cE("p");
            price.className = "price";
            price.textContent = "$" + product.price;


        cardContent.append(cardTitle, cardDescription, price, cardButton);
        cardImg.appendChild(cardBackgroud);
    card.append(cardImg, cardContent);




return card

};


