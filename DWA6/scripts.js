import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

// Query selectors
const searchCancelBtn = document.querySelector('[data-search-cancel]');
const settingsCancelBtn = document.querySelector('[data-settings-cancel]');
const headerSearchBtn = document.querySelector('[data-header-search]');
const headerSettingsBtn = document.querySelector('[data-header-settings]');
const listCloseBtn = document.querySelector('[data-list-close]');
const listItems = document.querySelector('[data-list-items]');
const listButton = document.querySelector('[data-list-button]');
const settingsForm = document.querySelector('[data-settings-form]');
const searchForm = document.querySelector('[data-search-form]');

// Event Listeners
searchCancelBtn.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
});

settingsCancelBtn.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

headerSearchBtn.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus();
});

headerSettingsBtn.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
});

listCloseBtn.addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});


//Day & Night Mode
settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }

    document.querySelector('[data-settings-overlay]').open = false;
});


//Search Button
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];


    //Filtre Genre
    for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) {
                genreMatch = true;
            }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) &&
            genreMatch
        ) {
            result.push(book);
        }
    }


    //Message: No results found. Your filters might be too narrow
    if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show');
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show');
    }
    listItems.innerHTML = '';
    const newItems = document.createDocumentFragment();


    //Image Preview
    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</

                </div>
                `;
        
                newItems.appendChild(element);
            }
  let page = 1;
            listItems.appendChild(newItems);
            listButton.enable = (result.length - (page * BOOKS_PER_PAGE)) < 1;
        
        });


        //Preview Books With More Details
        listItems.addEventListener('click', (event) => {
            const pathArray = Array.from(event.path || event.composedPath());
            let active = null;
        
            for (const node of pathArray) {
                if (active) break;
        
                if (node?.dataset?.preview) {
                    let result = null;
        
                    for (const singleBook of books) {
                        if (result) break;
                        if (singleBook.id === node?.dataset?.preview) result = singleBook;
                    }
        
                    active = result;
                }
            }
        
            if (active) {
                document.querySelector('[data-list-active]').open = true;
                document.querySelector('[data-list-blur]').src = active.image;
                document.querySelector('[data-list-image]').src = active.image;
                document.querySelector('[data-list-title]').innerText = active.title;
                document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
                document.querySelector('[data-list-description]').innerText = active.description;
            }
        });




        

        

        
       

let matches = books
const starting = document.createDocumentFragment()

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `

    starting.appendChild(element)
}
document.querySelector('[data-list-items]').appendChild(starting)




//Genre and Author filtre
const genreHtml = document.createDocumentFragment()
const firstGenreElement = document.createElement('option')
firstGenreElement.value = 'any'
firstGenreElement.innerText = 'All Genres'
genreHtml.appendChild(firstGenreElement)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
}

document.querySelector('[data-search-genres]').appendChild(genreHtml)

const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}

document.querySelector('[data-search-authors]').appendChild(authorsHtml)





//Show More
document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
document.querySelector('[data-list-button]') = (matches.length - (page * BOOKS_PER_PAGE)) > 0

document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`





//Flexibility: Reusable functions can be easily modified and adapted to different contexts by accepting parameters and returning values. They offer flexibility by allowing you to pass dynamic values and customize their behavior based on specific requirements.


