import {GET} from "./http.js";
import {createContactsList, cE, qS, qA} from "./function.js"

GET("/users").then((data)=> {
    console.log(data);

    data.forEach((el)=> {
        contacts.append(createContactsList(el))
    })
})

let contacts = qS(".contacts");


