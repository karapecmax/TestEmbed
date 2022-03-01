function btnCounter(id) {
  let iconStyle = document.getElementById(id);
  let paragraph = document.getElementById(`${id}likes`);
  let likesAmount = +document
    .getElementById(`likeBtn-${id}`)
    .getAttribute("data-likes");

  if (iconStyle.style.fill === "red") {
    likesAmount--;
    iconStyle.style.fill = "none";
  } else {
    likesAmount++;
    iconStyle.style.fill = "red";
  }
  document
    .getElementById(`likeBtn-${id}`)
    .setAttribute("data-likes", likesAmount);
  paragraph.innerHTML = likesAmount;
}

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    let wrapper = document.getElementById("wrapper");
    let button = document.getElementById("lmbutton");
    let count = 0;
    button.addEventListener("click", () => {
      count = count + 4;

      for (let i = count; i < count + 4; i++) {
        let date = new Date(jsondata[i].date);
        const month = date.toLocaleString("en-US", { month: "long" });
        const day = date.toLocaleString("en-US", { day: "2-digit" });
        const year = date.getFullYear();

        var likesNumber = parseInt(jsondata[i].likes);
        let item_element = document.createElement("div");
        item_element.classList.add("post");
        item_element.innerHTML = `
        <div class="header-card">
      <img class="profile-pic" src=${jsondata[i].profile_image}></img>
      <div>
      <p class="name-tag">${jsondata[i].name}</p>
      <p class="date-tag">${day} - ${month} - ${year}</p>
      </div>
      </div>
       
        <img src=${jsondata[i].image} id="post-image" width="400px" height="400px"></img>
        <p>${jsondata[i].caption}</p>
        <hr>
        <div class="likeCounterStyle">
        <button class='likeButton' id="likeBtn-${jsondata[i].id}" data-id="${jsondata[i].id}" data-likes="${likesNumber}" onclick='btnCounter(${jsondata[i].id})'><span><svg
      id="${jsondata[i].id}"
      class="svgPic"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill = "none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7617 3.26543C14.3999 2.90347 13.9703 2.61634 13.4976 2.42045C13.0248 2.22455 12.518 2.12372 12.0063 2.12372C11.4945 2.12372 10.9878 2.22455 10.515 2.42045C10.0422 2.61634 9.61263 2.90347 9.25085 3.26543L8.50001 4.01626L7.74918 3.26543C7.0184 2.53465 6.02725 2.1241 4.99376 2.1241C3.96028 2.1241 2.96913 2.53465 2.23835 3.26543C1.50756 3.99621 1.09702 4.98736 1.09702 6.02084C1.09702 7.05433 1.50756 8.04548 2.23835 8.77626L2.98918 9.52709L8.50001 15.0379L14.0108 9.52709L14.7617 8.77626C15.1236 8.41448 15.4108 7.98492 15.6067 7.51214C15.8026 7.03935 15.9034 6.53261 15.9034 6.02084C15.9034 5.50908 15.8026 5.00233 15.6067 4.52955C15.4108 4.05677 15.1236 3.62721 14.7617 3.26543V3.26543Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg></span></button>
        <p id="${jsondata[i].id}likes">${likesNumber}</p>
        </div>
        `;
        wrapper.appendChild(item_element);
      }
      if (count == 16) {
        button.style.display = "none";
        return;
      }
    });

    for (let i = count; i < count + 4; i++) {
      var likesNumber = parseInt(jsondata[i].likes);

      let date = new Date(jsondata[i].date);
      const month = date.toLocaleString("en-US", { month: "long" });
      const day = date.toLocaleString("en-US", { day: "2-digit" });
      const year = date.getFullYear();

      let item_element = document.createElement("div");
      item_element.classList.add("post");
      item_element.innerHTML = `
     <div class="header-card">
      <img class="profile-pic" src=${jsondata[i].profile_image}></img>
      <div>
      <p class="name-tag">${jsondata[i].name}</p>
      <p class="date-tag">${day} - ${month} - ${year}</p>
      </div>
      </div>
      <img src=${jsondata[i].image} id="post-image" width="400px" height="400px"></img>
      <p>${jsondata[i].caption}</p>
      <hr>
      <div class="likeCounterStyle">
      <button class='likeButton' id="likeBtn-${jsondata[i].id}" data-id="${jsondata[i].id}" data-likes="${likesNumber}" onclick='btnCounter(${jsondata[i].id})'><span><svg
      id="${jsondata[i].id}"
      class="svgPic"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill = "none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7617 3.26543C14.3999 2.90347 13.9703 2.61634 13.4976 2.42045C13.0248 2.22455 12.518 2.12372 12.0063 2.12372C11.4945 2.12372 10.9878 2.22455 10.515 2.42045C10.0422 2.61634 9.61263 2.90347 9.25085 3.26543L8.50001 4.01626L7.74918 3.26543C7.0184 2.53465 6.02725 2.1241 4.99376 2.1241C3.96028 2.1241 2.96913 2.53465 2.23835 3.26543C1.50756 3.99621 1.09702 4.98736 1.09702 6.02084C1.09702 7.05433 1.50756 8.04548 2.23835 8.77626L2.98918 9.52709L8.50001 15.0379L14.0108 9.52709L14.7617 8.77626C15.1236 8.41448 15.4108 7.98492 15.6067 7.51214C15.8026 7.03935 15.9034 6.53261 15.9034 6.02084C15.9034 5.50908 15.8026 5.00233 15.6067 4.52955C15.4108 4.05677 15.1236 3.62721 14.7617 3.26543V3.26543Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg></span></button>
      <p id="${jsondata[i].id}likes">${likesNumber}</p>
      </div>
      `;
      wrapper.appendChild(item_element);
    }
  });
