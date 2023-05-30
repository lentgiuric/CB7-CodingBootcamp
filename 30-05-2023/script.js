import { BASE_URL, GET } from "./http.js";
import {createPost, cE, qS, } from "./function.js";


let keepData = Promise.all([GET("/posts"), GET("/users")]);
let postsData = [];
let usersData = [];


keepData.then((data) => {
    
    postsData = data[0].posts;
    usersData = data[1].users;

}).then( ()=> {

    

        postsData.map((element) => {
          element.user = usersData.find((user) => user.id === element.userId);
          return element;
        }).forEach((obj) => document.body.append(createPost(obj)));

  
    
})
