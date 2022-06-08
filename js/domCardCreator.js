////////////////////////////////////////////////////////////
//
// Gestore della creazione della card di un post
//
////////////////////////////////////////////////////////////

/**
 * Crea tutto l'html del header di un post
 *
 * @param {string} postAuthorIcon
 * @param {string} postAuthorName
 * @param {string} postCreationTime
 * @returns {string}
 */
function getHeaderTemplate(postAuthorIcon, postAuthorName, postCreationTime) {
  return `<div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img class="profile-pic" src="${postAuthorIcon}" alt="Profile image of ${postAuthorName}">
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${postAuthorName}</div>
        <div class="post-meta__time">${postCreationTime}</div>
      </div>
    </div>
  </div>`;
}

/**
 * Crea tutto l'html per il testo di un post
 *
 * @param {string} postText
 * @returns {string}
 */
function getTextTemplate(postText) {
  return `<div class="post__text">${postText}</div>`;
}

/**
 * Crea tutto l'html per l'immagine principale di un post
 *
 * @param {string} postImage - url dell'immagine da mostrare
 * @param {string} postImageAltText
 * @returns {string}
 */
function getImageTemplate(postImage, postImageAltText) {
  return `<div class="post__image">
            <img src="${postImage}" alt="${postImageAltText}">
          </div>`;
}

/**
 * Crea tutto l'html per il footer di un post
 *
 * @param {number} postId
 * @param {number} postLikes
 * @returns {string}
 */
function getFooterTemplate(postId, postLikes) {
  return `<div class="post__footer">
      <div class="row align-items-center text-center">
        <div class="col">
          <a class="btn btn-link" href="#" data-postid="${postId}">
            <i class="fas fa-thumbs-up"></i>
            Mi Piace
          </a>
        </div>

        <div class="col">
          Piace a <strong id="like-counter-1">${postLikes}</strong> persone
        </div>
      </div>
    </div>`;
}

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
function getPostCardTemplate(post) {
  return `<div class="card card-post">
    <div class="card-body">
      ${getHeaderTemplate(post.author.image, post.author.name, post.created_at)}
      ${getTextTemplate(post.content)}
      ${getImageTemplate(post.media, "Cover image of post " + post.id)}
      ${getFooterTemplate(post.id, post.likes)}
    </div>
  </div>`;
}
