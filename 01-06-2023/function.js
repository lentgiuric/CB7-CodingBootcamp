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

    let followImg = cE("div");
    followImg.className = "follow_img";
    let profileImg = cE("img");
    profileImg.src = obj.image || "";
        

    let followContent = cE("div");
    followContent.className = "follow_content";
    let followName = cE("p");
    followName.texContent = obj.firstName;
    let followNickname = cE("p");
    followNickname.texContent = obj.username;
        

    let followButton = cE("div");
    followButton.className = "follow_button";
    let buttonTitle = cE("p");
    buttonTitle.texContent = "Follow";
        

    followImg.append(profileImg);
    followContent.append(followName, followNickname);
    followButton.append(buttonTitle);
    followList.append(followImg, followContent, followButton);

    return followList
    
}



// export const create