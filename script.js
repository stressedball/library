'use strict';

const author = document.querySelector('input#author');
const buttonBookSubmit = document.querySelector('button#book-submit-button');
const formDisplayButton = document.querySelector('button#book-add-button');
const formArray = document.querySelectorAll('form');
const hiddenStyle = document.querySelectorAll('.hidden');
const isRead = document.querySelector('input#isRead');
const shelve = document.querySelector('.shelve-container');
const title = document.querySelector('input#title');

const book1 = new Book('Les misérables', 'Victor Hugo', 'read');
const book2 = new Book('Moby Dick', 'Herman Melville', 'read');
let library = [];


//BIG BUTTON
window.addEventListener('click', addBook);
/*buttonBookSubmit.addEventListener('click', addBook);
*/window.addEventListener('keypress', inputManagement);
window.addEventListener('load', onLoad);
formDisplayButton.addEventListener('click', showAll);

function onLoad() {
    //get books in HTML and display them
    library.push(book1, book2);
    displayBooks();
}

function removeBook(event) {
    const removeButtonsAll =  document.querySelectorAll('.remove');
    const removeIndex = event.target.dataset.index;
    
    library.splice(removeIndex, 1);
    for (let i = removeIndex; i < removeButtonsAll.length; i++) {
        removeButtonsAll[i].setAttribute('data-index', `${i - 1}`);
    }
    
    let tileToRemove = event.target.parentElement;
    tileToRemove.remove();

}


//book constructor
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;      
}

function addBook(event) {
    if (event.target.classList.contains('remove')) {
        removeBook(event);
        return;
    }
    
    if (event.target !== buttonBookSubmit) {
        return;
    }

    let title = document.querySelector('input#title');
    let author = document.querySelector('input#author');
    let isRead = document.querySelector('input#isRead');
    const book = new Book(title.value, author.value, isRead);
    library.push(book);
    displayBooks();
}

function displayBooks() {
    
    for (let book of library) {
        const tiles =  document.querySelectorAll('.tile-container');
        if (library.indexOf(book) < tiles.length) {
            if (tiles.length > 0) {
                continue;
            }
        } 


        let tile = document.createElement('div');
        tile.classList.add('tile-container');
        shelve.appendChild(tile);
        
        //we populate the tile with its sub details
        let title = document.createElement('p');
        title.classList.add('title');
        let author = document.createElement('p');
        author.classList.add('author');
        let isRead = document.createElement('p');
        isRead.classList.add('isRead');
        tile.appendChild(title);
        tile.appendChild(author);

        let statusDiv = document.createElement('div');
/*        let span = document.createElement('span');
        span.textContent = 'Status';
        statusDiv.appendChild(span);*/
        let label = document.createElement('label');
        label.classList.add('switch');
        label.classList.add('round');
        let input = document.createElement('input');
        input.type = 'checkbox';
        let slider = document.createElement('span');
        slider.classList.add('slider');
        slider.classList.add('round');
        label.appendChild(input);
        label.appendChild(slider);
        statusDiv.appendChild(label);
        tile.appendChild(statusDiv);
        //details appear on HTML
        title.textContent = book.title;
        author.textContent = book.author;
        if (book.isRead.checked === true) {
            input.checked = true;
        }
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.setAttribute('data-index', `${library.indexOf(book)}`);
        removeButton.textContent = 'Remove';
        tile.appendChild(removeButton);

    }
}

//display hidden form
function showAll() {
    for (let element of hiddenStyle) {
        element.classList.remove('hidden');
        element.classList.add('display');
    }

    formDisplayButton.classList.remove('hidden');
    formDisplayButton.classList.add('display');
}

//prevent page from refreshing on enter, easy yet very useful, might need to
//make my first reusable script :)
function inputManagement(inputKey) {
    if (inputKey.key === 'Enter') {
        inputKey.preventDefault();
        return;
    }
}