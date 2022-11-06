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
buttonBookSubmit.addEventListener('click', addBook);
window.addEventListener('keypress', inputManagement);
window.addEventListener('load', onLoad);
formDisplayButton.addEventListener('click', showAll);

function onLoad() {
    //get books in HTML and display them
    library.push(book1, book2);
    displayBooks();
    const removeButtons = document.querySelectorAll('button.remove');
    for (let button of removeButtons) {
        button.addEventListener('click', removeBook);
    }

}

function removeBook(event) {
    library.splice(event.target.dataset.index, 1);
    let tileToRemove = event.target.parentElement;
    tileToRemove.remove();
}


//book constructor
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;      
}

function addBook() {
    let title = document.querySelector('input#title');
    let author = document.querySelector('input#author');
    let isRead = document.querySelector('input#isRead');
    const book = new Book(title.value, author.value, isRead.value);
    library.push(book);
    displayBooks();
}

function displayBooks() {
    for (let book of library) {
        const tiles =  document.querySelectorAll('.tile-container');
        if (library.indexOf(book) < tiles.length) {
            if (tiles.length > 0) {
                console.log('here', library.indexOf(book))
                continue;
            }
        } 


        //need to figure out a way to stop the loop from going through the library without printing again the first books
        //for ex if last book is 'Les Misérables', DONT ADD ALL THE BOOKS FROM LES MISERABLES TO library [0]
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
        tile.appendChild(isRead);
        tile.setAttribute('data-index', `${library.indexOf(book)}`);
        //details appear on HTML
        title.textContent = book.title;
        author.textContent = book.author;
        isRead.textContent = book.isRead;
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