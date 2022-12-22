const library = document.querySelector('.library');
const form = document.querySelector('form');
const addBookBtn = document.querySelector('.add-button');
const closeFormBtn = document.querySelector('.close-button');
const formBtn = document.querySelector('.form-button');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#num-pages');
const bookReadStatus = document.querySelectorAll('#read-status');

const readChoices = document.getElementsByName('hasRead');

let book;
let readChoice;

let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
}

Book.prototype.addBookToShelf = function() {
        newBook = document.createElement('article');
        newBook.className = 'book';
        library.appendChild(newBook);

        newTitle = document.createElement('h3');
        newTitle.className = 'title';
        newTitle.textContent = this.title;
        newBook.appendChild(newTitle);

        by = document.createElement('p');
        by.textContent = 'by';
        newBook.appendChild(by);

        newAuthor = document.createElement('p');
        newAuthor.className = 'author';
        newAuthor.textContent = this.author;
        newBook.appendChild(newAuthor);

        newPages = document.createElement('p');
        newPages.className = 'pages';
        newPages.textContent = `Number of pages: ${this.pages}`;
        newBook.appendChild(newPages);

        readStatus = document.createElement('p');
        spanStatus = document.createElement('span');
        readStatus.textContent = 'Status: ';
        if (this.hasRead === 'Yes') {
            spanStatus.className = 'read';
            spanStatus.textContent = 'read';
        } else if (this.hasRead === 'No') {
            spanStatus.className = 'not-read';
            spanStatus.textContent = 'not read';
        }
        readStatus.appendChild(spanStatus);
        newBook.appendChild(readStatus);
}

function createBook() {
    title = document.querySelector('#title');
    author = document.querySelector('#author');
    pages = document.querySelector('#num-pages');

    
    for (const choice of readChoices) {
        if (choice.checked) {
            readChoice = choice.value;
        }
    }

    book = new Book(title.value, author.value, pages.value.toString(), readChoice);
    book.addBookToLibrary();
    book.addBookToShelf();
}

function showForm() {
    if (form.className === 'invisible') {
        form.classList.add('visible');
        form.classList.remove('invisible');
    }
}

function removeForm() {
    if (form.className === 'visible') {
        form.classList.add('invisible');
        form.classList.remove('visible');
    }
}

function showBooks() {
    for (const book of myLibrary) {
        book.addBookToShelf();
    }
}

const book1 = new Book('Harry Potter', 'JK Rowling', 400, 'No');
const book2 = new Book('The Maze Runner', 'James Dashner', 375, 'Yes');
const book3 = new Book('Tell me your dreams', 'Sydney Sheldon', 200, 'No');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

showBooks();
addBookBtn.addEventListener('click', showForm);
closeFormBtn.addEventListener('click', removeForm);
formBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createBook();
});



