
let searchParams = new URLSearchParams(window.location.search);
const id=searchParams.get('id');

//hindel fetch specific posts and display in postDetails page
function fetchAndDisplayPost(){
    let specificPostContainer=document.querySelector(".specific-Post")
    specificPostContainer.innerHTML=""
    let allFeedbacks=document.querySelector(".all-feedbacks")
    allFeedbacks.innerHTML=""
    showLoader(true)
    axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`).then((response)=>{
      showLoader(false)
            let post=response.data.data
            let allComments=response.data.data.comments

            let postTages=""
            for(tage of post.tags){
                postTages +=`
                <button type="button" class="btn btn-secondary btn-sm rounded-pill">${tage.name}</button>
                `
            }
           
            let postContent=`
            <div class="post my-4 second-color">
                  <div class="d-flex gap-2 align-items-center p-3">
                    <img src="${post.author.profile_image.length?post.author.profile_image:"./images/avatar-02.png"}" alt="img" class="rounded-circle user-img" onclick="showProfile(${post.author.id})">
                    <span class="lh-sm">
                      <p class="primary-color m-0">${post.author.name}</p>
                      <small class="primary-color">${post.created_at}</small>
                    </span>
    
                    <span class="ms-auto d-flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots primary-color" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg primary-color" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>
                    </span>
                  </div>
                  <p class="description primary-color mt-1 p-3 text-break">${post.body}</p>

                  <div class="mt-1 px-3 pt-0 pb-2">
                    ${postTages}
                  </div>

                  <img src="${post.image.length?post.image:"./images/storys/download (1).jpeg"}" alt="img" class="w-100 post-body">
                  <div class="post-Interaction d-flex   align-items-center p-3 pb-2">
                    <div class="d-flex align-items-center">
                      <div class="icons position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-emoji-laughing-fill text-warning icon-1 position-absolute top-0 translate-middle" viewBox="0 0 16 16">
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill text-danger icon-2 position-absolute top-0 translate-middle" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-emoji-angry-fill text-danger icon-3 position-absolute top-0 translate-middle" viewBox="0 0 16 16">
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5"/>
                        </svg>
                      </div>
                      <div class="primary-color"> 1k</div>
                    </div>
                    <div class="ms-auto d-flex gap-2">
                      <span class="primary-color">
                        ${post.comments_count} comments
                      </span>
                      <span class="primary-color">
                        20 shares
                      </span>
                    </div>
                  </div>
                  <div class="post-footer row p-2 px-4 flex-wrap gap-2">
                    <div class="col justify-content-center action d-flex gap-2 align-items-center p-2">
                      <i class="fa-regular fa-thumbs-up primary-color"></i>
                      <span class="primary-color">Like</span>
                    </div>
                    <div class="col justify-content-center action d-flex gap-2 align-items-center p-2">
                      <i class="fa-regular fa-comment primary-color"></i>
                      <span class="primary-color">Comment</span>
                    </div>
                    <div class="col justify-content-center action d-flex gap-2 align-items-center p-2">
                      <i class="fa-solid fa-share primary-color"></i>
                      <span class="primary-color">Share</span>
                    </div>
                  </div>
                </div>
            `
            specificPostContainer.innerHTML=postContent
            allFeedbacks.innerHTML=""
            //add feedbacks to page
            for(comment of allComments){
                let feedback=`
                <div class="second-color feedback shadow">
                  <div class="d-flex gap-2 align-items-center px-3 py-2">
                    <img src="${comment.author.profile_image.length?comment.author.profile_image:"./images/avatar-02.png"}" alt="img" class="rounded-circle">
                    <span class="lh-sm">
                      <p class="primary-color m-0">${comment.author.name}</p>
                    </span>
                  </div>
                  <p class="description primary-color px-3 py-2 pt-0 text-break">${comment.body}</p>
               </div>
                `
                allFeedbacks.innerHTML+=feedback
            }
        
    
    }).catch((error)=>{
        console.log(error)
        showLoader(false)
    })
}
fetchAndDisplayPost()


//hindel add new comment
function addNewComment(){
    let comment = document.getElementById("comment");
    let addCommentBtn = document.getElementById("addComment-btn");
    
    addCommentBtn.addEventListener("click", () => {
        if (comment.value) {
            let commentData={body:comment.value}
            const userToken=localStorage.getItem("userToken")
            showLoader(true)
            axios.post(`https://tarmeezacademy.com/api/v1/posts/${id}/comments`, commentData,{
                headers:{
                    "authorization":`Bearer ${userToken}`
                }
            })
                .then((response) => {
                    console.log(response.data)
                    fetchAndDisplayPost()
                    comment.value=""
                    //show alert
                    alert("The comment was created successfully.","success")
                    showLoader(false)
                })
                .catch((error) => {
                    //show alert
                    alert(`${error.response.data.message}`,"danger")
                    showLoader(false)
                });
        } else {
            //show alert
            alert("Please enter any comment.","warning")
        }
    });
}
addNewComment()



//hindel view profile Details
function showProfile(id){
  window.location=`profile.html?id=${id}`
}