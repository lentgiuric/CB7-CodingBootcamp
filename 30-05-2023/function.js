export let cE = (el) => document.createElement(el);
export let qS = (el) => document.querySelector(el);

export const createPost = (obj) => {

    let mainPostCard = cE("div");
    mainPostCard.className = "main_postcard";



    let profilePost = cE("div");
    profilePost.className = "profile_post";
    let profileImg = cE("img");
    profileImg.src = "https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
        profilePost.appendChild(profileImg);


    let contentPost = cE("div");
    contentPost.className = "content_post";
    let profileName = cE("p");
    profileName.textContent = obj.user.username;
    let contentComment = cE("p");
    contentComment.textContent = obj.title;
        contentPost.append(profileName, contentComment);

    mainPostCard.append(profilePost, contentPost)
    
    return mainPostCard

}

// document.body.append(createPost())

