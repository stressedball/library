'use strict';

const author = document.querySelector('input#author');
const isRead = document.querySelector('input#status');
const formDisplay = document.querySelector('button#book-add-button');
const shelve = document.querySelector('.shelve');
const title = document.querySelector('input#title');

formDisplay.addEventListener('click', showAll);

// function addBook() {
//     let book = document.createElement('tr');
//     shelve.appendChild(book);
//     let cell = document.createElement('td');
//     let cell2 = document.createElement('td');
//     let cell3 = document.createElement('td');
//     let remove = document.createElement('td');
//     book.appendChild(cell);
//     book.appendChild(cell2);
//     book.appendChild(cell3);
//     book.appendChild(remove);

//     cell.textContent = title.value;
//     cell2.textContent = author.value;
//     cell3.textContent = isRead.value;
//     remove.textContent = 'yes / no';
// }

// let library = [];

// function Book(title, author, isRead) {
//     this.title = title;
// }

function showAll() {
    
}