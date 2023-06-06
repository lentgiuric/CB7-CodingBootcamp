import {GET} from "./http.js";
import {createContactsList, cE, qS, qA, createEmptymessage } from "./function.js";

let users = [];


//add contact list by server
GET("/users").then((data)=> {
    console.log(data);

    
    data.forEach((el)=> {
            
                contacts.append(createContactsList(el))
        
     })


})


let aHarr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let iQarr = ["I", "J", "K", "L", "M", "N", "O", "P","Q"];
let rZarr = ["r", "s", "t", "u", "v", "W", "x", "y", "z"];

let contacts = qS(".contacts");
let aH = qS(".ah");
let iQ = qS(".iq");
let rZ = qS(".rz");
let all = qS(".tutti");


// filter button event
aH.addEventListener("click", (e) => {

   
        contacts.textContent = "";


    
    GET("/users").then((data) => {
        let neWData = data.filter( (el) => {
            return aHarr.includes(el.name[0])
        } )
    
        console.log(neWData);

        neWData.forEach((el) => {
            contacts.append(createContactsList(el))
        })
    

    })

    
})

iQ.addEventListener("click", (e) => {

   
    contacts.textContent = "";



GET("/users").then((data) => {
    let neWData = data.filter( (el) => {
        return iQarr.includes(el.name[0])
    } )

    console.log(neWData);

    neWData.forEach((el) => {
        contacts.append(createContactsList(el))
    })


})


})

rZ.addEventListener("click", (e) => {

   
    contacts.textContent = "";



GET("/users").then((data) => {
    let neWData = data.filter( (el) => {

        
        if(rZarr.includes(el.name[0])){
            neWData.forEach((el) => {
                contacts.append(createContactsList(el))
            })
        }else{
            contacts.textContent = "";
            contacts.append(createEmptymessage())

        }
        
        return el
    } )

    console.log(neWData);

    

})


})

all.addEventListener("click", (e) => {

    contacts.textContent = "";


GET("/users").then((data) => {
    
    data.forEach((el)=> {
            
        contacts.append(createContactsList(el))

})

})

});






