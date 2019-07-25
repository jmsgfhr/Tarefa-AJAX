let newBookListItem = document.querySelector('#book-list ul');

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
    }
})