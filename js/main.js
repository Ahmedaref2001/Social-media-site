

window.onload=()=>{
    hindelTheme()
}

//hindel change active page
let navLink=document.querySelectorAll(".nav-link")
navLink.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        navLink.forEach((el)=>{
            el.classList.remove("active")
        })
        ele.classList.add("active")
    })
})

//hindel change theme
let listTheme=document.querySelectorAll(".theme")
let currentTheme=document.querySelector(".current-theme")
listTheme.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        listTheme.forEach((el)=>{
            el.classList.remove("active")
        })
        ele.classList.add("active")

        //change theme
        if(ele.classList.contains("dark")){
            document.body.classList.add("dark-them")
            localStorage.setItem("theme","dark-them")
        }else{
            document.body.classList.remove("dark-them")
            localStorage.setItem("theme","light-them")
        }

        //clone new theme and change current theme
        let newTheme=ele.firstElementChild.cloneNode(true)
        currentTheme.replaceChild(newTheme,currentTheme.firstElementChild)
        
    })
})

//method to Handle theme when loading window
function hindelTheme(){
    if(localStorage.getItem("theme")==="dark-them"){
        document.body.classList.add("dark-them")
        document.querySelector(".dark").classList.add("active")

        //clone new theme and change current theme
        let newTheme=document.querySelector(".dark").firstElementChild.cloneNode(true)
        currentTheme.replaceChild(newTheme,currentTheme.firstElementChild)
    }else{
        document.querySelector(".light").classList.add("active")
    }
}


//all friends data
let friendsData = [
    { id: 1, image: "./images/avatar-01.png", name: "Ahmed Mohamed", story: "./images/storys/download (1).jpeg" },
    { id: 2, image: "./images/avatar-02.png", name: "Ahmed Gamal", story: "./images/storys/download (2).jpeg" },
    { id: 3, image: "./images/avatar-03.png", name: "Abdullah Ayman", story: "./images/storys/images (10).jpeg" },
    { id: 4, image: "./images/avatar-04.png", name: "Abanoub", story: "./images/storys/images (11).jpeg" },
    { id: 5, image: "./images/8.jpg", name: "Kareem Mohmoud", story: "./images/storys/images (10).jpeg" },
    { id: 6, image: "./images/avatar-06.png", name: "Mina Rafat", story: "./images/storys/images (9).jpeg" },
    { id: 7, image: "./images/avatar-05.png", name: "Peter Rafat", story: "./images/storys/images (8).jpeg" },
    { id: 8, image: "./images/9.jpg", name: "Eslam", story: "./images/storys/images (7).jpeg" },
    { id: 9, image: "./images/avatar-01.png", name: "Ahmed Aref", story: "./images/storys/images (6).jpeg" },
    { id: 10, image: "./images/avatar-02.png", name: "Ahmed Mohmoud", story: "./images/storys/images (5).jpeg" },
    { id: 11, image: "./images/avatar-03.png", name: "Hamad Ayman", story: "./images/storys/images (4).jpeg" },
    { id: 12, image: "./images/avatar-04.png", name: "Rafat", story: "./images/storys/images (3).jpeg" }
];
//add friends to home page
let friendsContainer=document.querySelector(".friends-container")
friendsData.forEach((ele)=>{
    let friend=`<div class="friend d-flex gap-2 align-items-center p-2">
            <img src="${ele.image}" alt="image" class="rounded-circle border border-primary border-2">
            <span class="primary-color fw-bold">${ele.name}</span>
          </div>`

          friendsContainer.innerHTML+=friend
})


//show more options
let seeMoreBtn=document.querySelector(".see-more")
let moreOptions=document.querySelector(".more-options")
seeMoreBtn.addEventListener("click",()=>{
    moreOptions.classList.toggle("hiden")
    if(!moreOptions.classList.contains("hiden")){
         seeMoreBtn.firstElementChild.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-caret-up-fill primary-color" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>`
        seeMoreBtn.lastElementChild.textContent="See less"
    }else{
        seeMoreBtn.firstElementChild.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-caret-down-fill primary-color" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>`
        seeMoreBtn.lastElementChild.textContent="See more"
    }
   
})



//add friends story to home page
let friendsStory = document.querySelector(".friends-story");
friendsData.forEach((ele) => {
    let friendStory = `
        <div class="friend-story second-color overflow-hidden position-relative swiper-slide">
            <span class="friend-img position-absolute rounded-circle border border-primary border-4 overflow-hidden">
                <img src="${ele.image}" alt="${ele.name}" class="w-100 h-100">
            </span>
            <img src="${ele.story}" alt="Story of ${ele.name}" class="w-100 h-100">
            <p class="friend-name text-light position-absolute m-0 bottom-0 start-0 w-100 px-3 py-2">${ele.name}</p>
        </div>`;
    
    friendsStory.innerHTML += friendStory;
});



//hindel slider in story 
let articleWidth = document.getElementsByTagName("article")[0].offsetWidth;
let numberOfStory=Math.floor(articleWidth / 180)
window.onresize=()=>{
    articleWidth= document.getElementsByTagName("article")[0].offsetWidth;
    numberOfStory=Math.floor(articleWidth / 180)
    swiperFunction()
}

let swiperFunction=()=>{
    let swiper = new Swiper(".mySwiper", {
          slidesPerView: numberOfStory,
          centerSlide:true,
          fade:true,
          grabCursor:true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function () {
                const swiperInstance = this;
                const nextButton = document.querySelector('.swiper-button-next');
                const prevButton = document.querySelector('.swiper-button-prev');
    
                // Hide the Previous button when on the first slide
                if (swiperInstance.isBeginning) {
                    prevButton.style.display = 'none';
                } else {
                    prevButton.style.display = 'flex';
                }
    
                // Hide the Next button when on the last slide
                if (swiperInstance.isEnd) {
                    nextButton.style.display = 'none';
                } else {
                    nextButton.style.display = 'flex';
                }
            },
        },
        });
        if (swiper.isBeginning) {
            document.querySelector('.swiper-button-prev').style.display = 'none';
        }
        if (swiper.isEnd) {
            document.querySelector('.swiper-button-next').style.display = 'none';
        }
}

swiperFunction()


// Handle login process
function handleLogin() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loginBtn = document.getElementById("loginBtn");
    let closeBtn = document.getElementById("close");
   

    loginBtn.addEventListener("click", () => {
        if (email.value && password.value) {
            let userData = { username: email.value, password: password.value };
            showLoader(true)
            axios.post("https://tarmeezacademy.com/api/v1/login", userData)
                .then((response) => {
                    localStorage.setItem("userToken", response.data.token);
                    localStorage.setItem("userData", JSON.stringify(response.data.user));
                    closeBtn.click();

                    //show alert
                    alert("Logged in successfully.","success")

                    updateLoginUI();
                    showLoader(false)
                })
                .catch((error) => {
                    closeBtn.click();
                    //show alert
                    alert("Login failed.","danger")
                    showLoader(false)
                });
        } else {
            //show alert
            alert("Please enter both email and password.","warning")
        }
    });
}
handleLogin();

//hindel regester process 
function handleRegester() {
    let name = document.getElementById("regester-name");
    let email = document.getElementById("regester-email");
    let password = document.getElementById("regester-password");
    let userImg=document.getElementById("userImg")
    let regesterBtn = document.getElementById("regesterBtn");
    let closeBtn = document.getElementById("regester-close");

    regesterBtn.addEventListener("click", () => {
        if (name.value && email.value && password.value&&userImg.files[0]) {
            let formData=new FormData()
            formData.append("name",name.value)
            formData.append("password",password.value)
            formData.append("username",email.value)
            formData.append("image",userImg.files[0])
            showLoader(true)
            axios.post("https://tarmeezacademy.com/api/v1/register", formData)
                .then((response) => {
                    localStorage.setItem("userToken", response.data.token);
                    localStorage.setItem("userData", JSON.stringify(response.data.user));
                    closeBtn.click();

                    //show alert
                    alert("A new account has been registered.","success")

                    updateLoginUI();
                    showLoader(false)
                })
                .catch((error) => {
                    closeBtn.click();
                    //show alert
                    alert(`${error.response.data.message}`,"danger")
                    showLoader(false)
                });
        } else {
            //show alert
            alert("Please enter both name and email and password.","warning")
        }
    });
}
handleRegester();


// Handle display of login/register or user data based on login status
function updateLoginUI() {
    const loginAndRegister = document.getElementById('login-and-regester');
    const userInfo = document.getElementById('user-data');
    const userName = document.querySelectorAll('#user-name');
    const userImg = document.querySelectorAll('#user-img');
    const addComment=document.querySelector(".add-comment")
    const myStory=document.querySelector(".my-story")

    let newPostInput=document.getElementById("new-post-input")
    let createNewPostBtn=document.querySelector(".create-new-post")

    const userData = JSON.parse(localStorage.getItem("userData"));
    
    if (userData) {
        loginAndRegister.classList.add("d-none");
        userInfo.classList.remove("d-none");
        myStory.classList.remove("d-none");
        createNewPostBtn?createNewPostBtn.classList.remove("d-none"):""
        userName.forEach((ele)=>{
            ele.textContent = userData.name;
        })
        userImg.forEach((ele)=>{
            ele.src = userData.profile_image.length ? userData.profile_image : "./images/avatar-02.png";
        })
        newPostInput?newPostInput.setAttribute("placeholder",`What's on your mind, ${userData.name}?`):""
        newPostInput?newPostInput.style.pointerEvents="auto":""
        //hindel add comment div
        addComment?addComment.classList.remove("d-none"):""
    } else {
        loginAndRegister.classList.remove("d-none");
        userInfo.classList.add("d-none");
        myStory.classList.add("d-none");
        createNewPostBtn?createNewPostBtn.classList.add("d-none"):""
        newPostInput?newPostInput.setAttribute("placeholder","You must login first"):""
        newPostInput?newPostInput.style.pointerEvents="none":""
        userName.forEach((ele)=>{
            ele.textContent = "";
        })
        userImg.forEach((ele)=>{
            ele.src = "";
        })
        //hindel add comment div
        addComment?addComment.classList.add("d-none"):""
    }
}
updateLoginUI();



// Handle logout process
function handleLogout() {
    let logout = document.getElementById("logout");

    logout.addEventListener("click", () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
        //show alert
        alert("Logged out successfully.","success")

        updateLoginUI();
    });
}
handleLogout();

//hindel view post Details
function postDetails(id){
    window.location=`postDetails.html?id=${id}`
}



//hindel show edit Post model
function showEditPostModel(postObject){
   
    let post=JSON.parse(decodeURIComponent(postObject))
    
    document.getElementById("post-header").innerText="Edit Post"
    document.getElementById("createPostBtn").innerText="Edit"
    document.getElementById("createPostBtn").setAttribute("edit-postId",`${post.id}`)
    document.getElementById("post-title").value=post.title
    document.getElementById("post-body").value=post.body

    let postModul=new bootstrap.Modal(document.getElementById("create-post"))
    postModul.toggle()
    
}

//hindel show delete post model
function showDeletePostModel(postId){
    document.getElementById("deletePostBtn").setAttribute("delete-postId",`${postId}`)
    let postModul=new bootstrap.Modal(document.getElementById("delete-post"))
    postModul.toggle()
}


//hindel delete method
function deletePost(){
  let deletePostBtn=document.getElementById("deletePostBtn")
  let closeBtn = document.getElementById("delete-post-close");

  const userToken=localStorage.getItem("userToken")

  deletePostBtn&&deletePostBtn.addEventListener("click", () => {
    let postId=deletePostBtn.getAttribute("delete-postId")
    showLoader(true)
  axios.delete(`https://tarmeezacademy.com/api/v1/posts/${postId}`,{
    headers:{
        "authorization":`Bearer ${userToken}`
    }
  })
    .then((response) => {
        fetchAndDisplayPosts()
        closeBtn.click();
        
        //show alert
        alert("The post has been successfully deleted.","success")
        updateLoginUI();
        showLoader(false)
    })
    .catch((error) => {
        console.log(error)
        closeBtn.click();
        //show alert
        alert(`${error.response.data.message}`,"danger")
        showLoader(false)
    });
  })
}
deletePost()

//hindel click on creat post bootom
let newPostInput=document.getElementById("new-post-input")
let newPostBtn=document.getElementById("new-post-btn")

newPostInput&&newPostInput.addEventListener("click",showAddPostModel)
newPostBtn&&newPostBtn.addEventListener("click",showAddPostModel)

function showAddPostModel(){
    document.getElementById("post-title").value=""
    document.getElementById("post-body").value=""
    document.getElementById("postImg").value=""
    document.getElementById("createPostBtn").setAttribute("edit-postId","")
    document.getElementById("post-header").innerText="Create a new post"
    document.getElementById("createPostBtn").innerText="Create"

    let postModul=new bootstrap.Modal(document.getElementById("create-post"))
    postModul.toggle()
}






//hindel create And Edit Post method 
function createAndEditPost() {
    let title = document.getElementById("post-title");
    let body = document.getElementById("post-body");
    let postImg=document.getElementById("postImg")
    let createPostBtn = document.getElementById("createPostBtn");
    let closeBtn = document.getElementById("create-post-close");

    createPostBtn&&createPostBtn.addEventListener("click", () => {
        if (title.value && body.value &&postImg.files[0] ) {
            let formData=new FormData()
            formData.append("title",title.value)
            formData.append("body",body.value)
            formData.append("image",postImg.files[0])

            const userToken=localStorage.getItem("userToken")

            //edit post
            let postId=createPostBtn.getAttribute("edit-postId")
            if(postId){
                formData.append("_method","put")
                showLoader(true)
                axios.post(`https://tarmeezacademy.com/api/v1/posts/${postId}`, formData,{
                    headers:{
                        "authorization":`Bearer ${userToken}`
                    }
                })
                    .then((response) => {
                        //show alert
                        alert("The post has been successfully modified.","success")
                        fetchAndDisplayPosts()
                        closeBtn.click();
                        updateLoginUI();
                        showLoader(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        closeBtn.click();
                        //show alert
                        alert(`${error.response.data.message}`,"danger")
                        showLoader(false)
                    });
                     title.value=""
                     body.value=""
                     postImg.value=""
            }
            //add new post
            else{
                showLoader(true)
                axios.post("https://tarmeezacademy.com/api/v1/posts", formData,{
                    headers:{
                        "authorization":`Bearer ${userToken}`
                    }
                })
                    .then((response) => {
                        fetchAndDisplayPosts()
                        closeBtn.click();
                        
                        //show alert
                        alert("The post was created successfully.","success")
                        updateLoginUI();
                        showLoader(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        closeBtn.click();
                        //show alert
                        alert(`${error.response.data.message}`,"danger")
                        showLoader(false)
                    });
                     title.value=""
                     body.value=""
                      postImg.value=""
            }

            
        } else {
            //show alert
            alert("Please enter both title and post description.","warning")
        }
       
    });
}
createAndEditPost();









//hindel alerts method
function alert(alertBody,status){
    let alert=document.getElementById("alert")
    let toastBody=document.querySelector(".toast-body")

    //show alert
    toastBody.textContent=alertBody;
    alert.classList.add("show",`bg-${status}`)
    setTimeout(()=>{
        alert.classList.remove("show",`bg-${status}`)
    },3000)
}


//hindel loader method
function showLoader(show){
if(show){
    document.getElementById("loader").classList.remove("d-none")
}
else{
     document.getElementById("loader").classList.add("d-none")
}
}
