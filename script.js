'use strict';

const author = document.querySelector('input#author');
const formDisplayButton = document.querySelector('button#book-add-button');
const hiddenStyle = document.querySelectorAll('.hidden');
const isRead = document.querySelector('input#status');
const shelve = document.querySelector('.shelve-container');
const title = document.querySelector('input#title');
const tiles =  document.querySelectorAll('.tile-container');
const book1 = new Book('Les misérables', 'Victor Hugo', 'read');
const book2 = new Book('Moby Dick', 'Herman Melville', 'read');
let library = [];

//BIG BUTTON
formDisplayButton.addEventListener('click', showAll);

function showAll() {
    for (let element of hiddenStyle) {
        element.classList.remove('hidden');
        element.classList.add('display');
    }

    for (let tile of tiles) {
        library.push(tile);
    }
    console.log(library)

    formDisplayButton.classList.remove('hidden');
    formDisplayButton.classList.add('display');
}

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.sayBook = function() {
        console.log(`Name : ${title}, Author : ${author}, Status : ${isRead}`);
    }
    
}

window.addEventListener('load', addBook);

function addBook() {

    library.push(book1, book2);
    for (let book of library) {
        console.log(book);
        //we create the tile and append it to the shelve container
        let tile = document.createElement('div');
        tile.classList.add('tile-container');
        shelve.appendChild(tile);

        //we take a book from [library] and do stuff
        let title = document.createElement('p');
        title.classList.add('title');
        let author = document.createElement('p');
        author.classList.add('author');
        let isRead = document.createElement('p');
        isRead.classList.add('status');
        tile.appendChild(title);
        tile.appendChild(author);
        tile.appendChild(isRead);

        title.textContent = book.title;
        author.textContent = book.author;
        isRead.textContent = book.isRead;

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
        tile.appendChild(removeButton);
        
    }
    
}
