import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

 const template = document.createElement('template');
template.innerHTML = `
  <style>
   
      .preview {
        border-width: 0;
        width: 100%;
        font-family: Roboto, sans-serif;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-align: left;
        border-radius: 8px;
        border: 1px solid rgba(var(--color-dark), 0.15);
        background: rgba(var(--color-light), 1);
      }
      
      @media (min-width: 60rem) {
        .preview {
          padding: 1rem;
        }
      }
      
      .preview_hidden {
        display: none;
      }
      
      .preview:hover {
        background: rgba(var(--color-blue), 0.05);
      }
      
      .preview__image {
        width: 48px;
        height: 70px;
        object-fit: cover;
        background: grey;
        border-radius: 2px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      }
      
      .preview__info {
        padding: 1rem;
      }
      
      .preview__title {
        margin: 0 0 0.5rem;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        color: rgba(var(--color-dark), 0.8)
      }
      
      .preview__author {
        color: rgba(var(--color-dark), 0.4);
      }

    </style>

<dialog class="overlay" data-list-active>
<div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
<div class="overlay__content">
  <h3 class="overlay__title" data-list-title></h3>
  <div class="overlay__data" data-list-subtitle></div>
  <p class="overlay__data overlay__data_secondary" data-list-description></p>
</div>

<div class="overlay__row">
  <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
</div>
</dialog>
`;
class BookPreviews extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root and attach it to the element
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Create a container element to hold the book previews
    const container = document.createElement('div');
    container.setAttribute('data-list-items', '');
    shadowRoot.appendChild(container);

    // Render the book previews
    this.renderBookPreviews(container);
  }

  renderBookPreviews(container) {
    const fragment = document.createDocumentFragment();

    for (const { author, id, image, title } of books) {
      const element = this.createBookPreviewElement(author, id, image, title);
      fragment.appendChild(element);
    }

    container.appendChild(fragment);
  }

  createBookPreviewElement(author, id, image, title) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    const imageElement = document.createElement('img');
    imageElement.classList = 'preview__image';
    imageElement.src = image;
    element.appendChild(imageElement);

    const infoElement = document.createElement('div');
    infoElement.classList = 'preview__info';
    element.appendChild(infoElement);

    const titleElement = document.createElement('h3');
    titleElement.classList = 'preview__title';
    titleElement.innerText = title;
    infoElement.appendChild(titleElement);

    const authorElement = document.createElement('div');
    authorElement.classList = 'preview__author';
    authorElement.innerText = authors[author];
    infoElement.appendChild(authorElement);

    return element;
  }
}

// Define the custom element
customElements.define('book-previews', BookPreviews);
export default BookPreviews