let page=1
let lastPage=1


document.getElementById("logout").addEventListener("click",()=>{
    fetchAndDisplayPosts(page)
})


//hindel fetch posts and display in home page
function fetchAndDisplayPosts(numOFPage=1,relod=true){
    let allPostsContainer=document.querySelector(".all-posts")
    relod?allPostsContainer.innerHTML="":""
    const userData = JSON.parse(localStorage.getItem("userData"));
    usrId=userData&&userData.id
    showLoader(true)
    axios.get(`https://tarmeezacademy.com/api/v1/posts?page=${numOFPage}`).then((response)=>{
      showLoader(false)
        let allPosts=response.data.data
        lastPage=response.data.meta.last_page
    
        for(post of allPosts){

            let postTages=""
            for(tage of post.tags){
                postTages +=`
                <button type="button" class="btn btn-secondary btn-sm rounded-pill">${tage.name}</button>
                `
            }

            let icons
            if(usrId===post.author.id){
              icons=`<svg xmlns="http://www.w3.org/2000/svg" onclick="showEditPostModel('${encodeURIComponent(JSON.stringify(post))}')" width="22" height="22" fill="currentColor" class="bi bi-pencil-square primary-color" viewBox="0 0 16 16">
               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
               <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" onclick="showDeletePostModel(${post.id})" width="22" height="22" fill="currentColor" class="bi bi-trash-fill text-danger" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg>
               `
        }else{
          icons=` <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots primary-color" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg primary-color" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>
                    
                    `
        }
           

            let postContent=`
            <div class="post my-4 second-color">
                  <div class="d-flex gap-2 align-items-center p-3">
                    <img src="${post.author.profile_image.length?post.author.profile_image:"./images/avatar-02.png"}" alt="img" class="rounded-circle user-img" onclick="showProfile(${post.author.id})"  style="cursor: pointer;">
                    <span class="lh-sm">
                      <p class="primary-color m-0">${post.author.name}</p>
                      <small class="primary-color">${post.created_at}</small>
                    </span>
    
                    <span class="ms-auto d-flex gap-2">
                    ${icons}
                    </span>
                  </div>
                  <p class="description primary-color mt-1 p-3 text-break">${post.body}</p>

                  <div class="mt-1 px-3 pt-0 pb-2 d-flex gap-2">
                    ${postTages}
                  </div>

                  <img src="${post.image.length?post.image:"./images/storys/download (1).jpeg"}" alt="img" class="w-100 post-body" onclick="postDetails(${post.id})">
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
            allPostsContainer.innerHTML+=postContent
        }
    
    }).catch((error)=>{
        console.log(error)
        showLoader(false)
    })
}
fetchAndDisplayPosts()

//hindel display more posts during scroll
window.addEventListener("scroll", () => {
  let endPage = window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 1;
  
  if (endPage && page <= lastPage) {
      page++;
      fetchAndDisplayPosts(page, reload = false);
  }
});



//hindel view profile Details
function showProfile(id){
  window.location=`profile.html?id=${id}`
}

