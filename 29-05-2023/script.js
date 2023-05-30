const description = document.querySelectorAll('.description');
const navItem = document.querySelectorAll(".navbar_container");



navItem.forEach((element) => {

    element.addEventListener("click", (e)=>{

        description.forEach((item) => {
            item.classList.remove("active");
             })
            
            e.target.classList.add("active")
    })

    
});


    
