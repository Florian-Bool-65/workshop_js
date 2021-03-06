////////////////////////////////////////////////////////////
//
// Gestore della creazione della card di un post
//
////////////////////////////////////////////////////////////

const DomCardCreator = {
  /**
   * Crea tutto l'html del header di un post
   *
   * @param {string} postAuthorIcon
   * @param {string} postAuthorName
   * @param {string} postCreationTime
   * @returns {string}
   */
  getHeaderTemplate: function (
    postAuthorIcon,
    postAuthorName,
    postCreationTime
  ) {
    const itaCreationTime = new Date(postCreationTime).toLocaleDateString(
      "it-IT"
    );

    let imguser =``;

    if(postAuthorIcon!=null){
      imguser = `<img class="profile-pic" src="${postAuthorIcon}" alt="Profile image of ${postAuthorName}"></img>`;
    }else{
      let namesurname = postAuthorName.split(" ");
      let nome = namesurname[0]; 
      let surname = namesurname[1];       
      imguser =`<span class="post-author_initial">${nome[0]}${surname[0]}</span>`;
    }  

    return `<div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          ${imguser}
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${postAuthorName}</div>
          <div class="post-meta__time">${itaCreationTime}</div>
        </div>
      </div>
    </div>`;
  },

  /**
   * Crea tutto l'html per il testo di un post
   *
   * @param {string} postText
   * @returns {string}
   */
  getTextTemplate: function (postText) {
    return `<div class="post__text">${postText}</div>`;
  },

  /**
   * Crea tutto l'html per l'immagine principale di un post
   *
   * @param {string} postImage - url dell'immagine da mostrare
   * @param {string} postImageAltText
   * @returns {string}
   */
  getImageTemplate: function (postImage, postImageAltText) {
    return `<div class="post__image">
              <img src="${postImage}" alt="${postImageAltText}">
            </div>`;
  },

  /**
   * Crea tutto l'html per il footer di un post
   *
   * @param {number} postId
   * @param {number} postLikes
   * @returns {string}
   */
  getFooterTemplate: function (postId, postLikes) {
    return `<div class="post__footer">
        <div class="row align-items-center text-center">
          <div class="col">
            <a class="btn btn-link selected-like-button" id="like-button-${postId}" data-postid="${postId}">
              <i class="fas fa-thumbs-up"></i>
              Mi Piace
            </a>
          </div>
  
          <div class="col">
            Piace a <strong id="like-counter-${postId}" data-likepost="${postLikes}">${postLikes}</strong> persone
          </div>
        </div>
      </div>`;
  },

  /**
   * Crea l'html di tutta la card di un singolo post
   *
   * @param {{id: number,
   *          content: string,
   *          media: string,
   *          likes: number,
   *          created_at: string,
   *          author: {
   *            name: string,
   *            image: string
   *          }}} post
   * @returns {string}
   */
  getPostCardTemplate: function (post) {
    return `<div class="card card-post">
      <div class="card-body">
        ${this.getHeaderTemplate(
          post.author.image,
          post.author.name,
          post.created_at
        )}
        ${this.getTextTemplate(post.content)}
        ${this.getImageTemplate(post.media, "Cover image of post " + post.id)}
        ${this.getFooterTemplate(post.id, post.likes)}
      </div>
    </div>`;
  },
};
