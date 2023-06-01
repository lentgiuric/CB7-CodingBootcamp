export let cE = (el) => document.createElement(el);
export let qS = (el) => document.querySelector(el);


export const createPost = (obj) => {

    let mainPostCard = cE("div");
    mainPostCard.className = "main_postcard";


    let profilePost = cE("div");
    profilePost.className = "profile_post";
    let profileImg = cE("img");
    profileImg.src = obj.user?.image || "";
        profilePost.appendChild(profileImg);


    let contentPost = cE("div");
    contentPost.className = "content_post";
    let profileName = cE("p");
    profileName.textContent = obj.user?.firstName || "User";
    let contentComment = cE("p");
    contentComment.textContent = obj.body;
    contentPost.append(profileName, contentComment);

    mainPostCard.append(profilePost, contentPost)
    
    return mainPostCard

}


export const createFollow = (obj) => {

    let followList = cE("div");
    followList.className = "follow_list";

    let profilePhoto = cE("div");
    profilePhoto.className = "profile_photo";
    let photo = cE("img");
    photo.src = obj.image || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.123rf.com%2Fclipart-vettori%2Fimmagine_del_profilo_vuota.html&psig=AOvVaw0jXna95dXYh7LL4hLsXn6p&ust=1685730974385000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjv57Dbov8CFQAAAAAdAAAAABAF";
    
    let followContent = cE("div");
    followContent.className = "follow_content";
    followContent.textContent = obj.firstName;

    let arg = cE("p");
    arg.textContent = obj.lastName;
  
    let followButton = cE("button");
    followButton.className = "follow_button";
    followButton.textContent = "Follow"
   
    profilePhoto.append(photo);
    followList.append(profilePhoto, followContent, followButton )
    return followList
    
}



// export const create



/*  ho dovuto creare sopra una struttura solo con i div perchè questa 
    non funzionava
*/

// let followImg = cE("div");
//     followImg.className = "follow_img";
//     let profileImg = cE("img");
//     profileImg.src = obj.image || "";
        

//     let followContent = cE("div");
//     followContent.className = "follow_content";
//     let followName = cE("p");
//     followName.texContent = obj.firstName;
//     let followNickname = cE("p");
//     followNickname.texContent = obj.username;
        

//     let followButton = cE("div");
//     followButton.className = "follow_button";
//     let buttonTitle = cE("p");
//     buttonTitle.texContent = "Follow";
        

//     followImg.append(profileImg);
//     followContent.append(followName, followNickname);
//     followButton.append(buttonTitle);
//     followList.append(followImg, followContent, followButton);