let newBookListItem = document.querySelector('#book-list table');
let newBook = document.querySelectorAll('#add-book input');
const addBookButton = document.querySelector('#add-book button');

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
    }
})

function Post(name,author) {
    const novoLivro = {
        "book": {
            "name": name,
            "author": author
        }
    }

    const myHeaders = {
        "Content-Type": "application/json"
    }
    
    const fetchingConfig = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(novoLivro)
    }

    fetch('https://treinamento-api.herokuapp.com/books', fetchingConfig)
    .then((request) => {
        return request.json();
    })
    .then((responseAsJson) => {
        let newBookLine = document.createElement('tr');
        let newBookName = document.createElement('td');
        let newBookAutor = document.createElement('td');
        let newBookCreated = document.createElement('td');
        let newBookUpdate = document.createElement('td');
        newBookName.innerText = responseAsJson.name;
        newBookAutor.innerText = responseAsJson.author;
        newBookCreated.innerText = responseAsJson.created_at;
        newBookUpdate.innerText = responseAsJson.updated_at;
        newBookLine.appendChild(newBookName);
        newBookLine.appendChild(newBookAutor);
        newBookLine.appendChild(newBookCreated);
        newBookLine.appendChild(newBookUpdate);
        newBookListItem.appendChild(newBookLine);
    })
}

addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    Post(newBook[0].value,newBook[1].value);
})