import { BASE_URL, GET } from "./http.js";
import {createPost, cE, qS, createFollow} from "./function.js";

const description = document.querySelectorAll('.description');
const navItem = document.querySelectorAll(".navbar_container")
const postContent = qS(".post")
const followElements = qS(".to_follow")

let keepData = Promise.all([GET("/posts"), GET("/users")]);
let postsData = [];
let usersData = [];


keepData.then((data) => {
    
    postsData = data[0].posts;
    usersData = data[1].users;

}).then( ()=> {

    

        let err = postsData.map((element) => {
          element.user = usersData.find((user) => user.id === element.userId);
          return element;
        }).forEach((obj) => {
            postContent.append(createPost(obj))

            
        
        });

    
}).then(() => {

        usersData.forEach((element) => {

        console.log(element)

        followElements.append(createFollow(element))
    })

})






navItem.forEach((element) => {

    element.addEventListener("click", (e)=>{

        description.forEach((item) => {
            item.classList.remove("active");
             })
            
            e.target.classList.add("active")
    })

    
});


    
