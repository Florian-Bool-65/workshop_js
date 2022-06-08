// Immediately Invoked Function Expression (IIFE)
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Funzione anonima che si auto esegue immediatamente
(function () {
  console.log("Hello World");

  const ciao = "ciaoooo";
})();

const postContainer = document.getElementById("posts-container");

/* 
for (let i = 0; i < listaPosts.length; i++) {
  const post = listaPosts[i];
} */

listaPosts.forEach(function (post) {
  console.log(post.id);

  // Ottenere tutto l'html in stringa per la card del post corrente
  const cardTemplate = DomCardCreator.getPostCardTemplate(post);

  // Inserire la card nel DOM
  if (postContainer) {
    postContainer.innerHTML += cardTemplate;
  }
});

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
