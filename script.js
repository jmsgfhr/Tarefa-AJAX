<<<<<<< HEAD
let newBookListItem = document.querySelector('#book-list table');
=======
let newBookListItem = document.querySelector('#book-list ul');
>>>>>>> c80cffcd335f8aff8ec0010bd1bb8701698f6dc4

const myHeaders = {
    "Content-Type": "application/json"
}

const fetchingConfig = {
    method: 'GET',
    headers: myHeaders
}

let booksToLoad;

fetch('https://treinamento-api.herokuapp.com/books', fetchingConfig)
.then((request) => {
    return request.json();
})
.then((responseAsJson) => {
    booksToLoad = responseAsJson;
}).then(() => {
    for (let i = 0; i < booksToLoad.length; i++) {
<<<<<<< HEAD
        let newBookLine = document.createElement('tr');
        let newBookName = document.createElement('td');
        let newBookAutor = document.createElement('td');
        let newBookCreated = document.createElement('td');
        let newBookUpdate = document.createElement('td');
        newBookName.innerText = booksToLoad[i].name;
        newBookAutor.innerText = booksToLoad[i].author;
        newBookCreated.innerText = booksToLoad[i].created_at;
        newBookUpdate.innerText = booksToLoad[i].updated_at;
        newBookLine.appendChild(newBookName);
        newBookLine.appendChild(newBookAutor);
        newBookLine.appendChild(newBookCreated);
        newBookLine.appendChild(newBookUpdate);
        newBookListItem.appendChild(newBookLine);
=======
        let newBookItem = document.createElement('li');
        let newBookButton = document.createElement('span');
        newBookButton.classList.add('delete');
        newBookButton.innerText = "excluir"
        let newBookName = document.createElement('span');
        newBookName.innerText = `Livro: ${booksToLoad[i].name} Autor: ${booksToLoad[i].author}`;
        newBookName.classList.add('name');
        newBookItem.appendChild(newBookButton);
        newBookItem.appendChild(newBookName);
        newBookListItem.appendChild(newBookItem);
>>>>>>> c80cffcd335f8aff8ec0010bd1bb8701698f6dc4
    }
})