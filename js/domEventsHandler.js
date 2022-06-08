////////////////////////////////////////////////////////////
//
// Gestisce tutti gli eventi del DOM
//
////////////////////////////////////////////////////////////


const likebuttonslist = document.querySelectorAll(".selected-like-button");

likebuttonslist.forEach((element) => {
  element.addEventListener("click", function () {
    let datapostid = element.getAttribute("data-postid");

    let likespost = document.getElementById("like-counter-" + datapostid);

    let currentlike = parseInt(likespost.getAttribute("data-likepost"));
    currentlike += 1;

    likespost.setAttribute("data-likepost", currentlike);
    likespost.innerHTML = currentlike;
  });
});