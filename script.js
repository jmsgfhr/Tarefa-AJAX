let newBookListItem = document.querySelector('#book-list table');
let newBook = document.querySelectorAll('#add-book input');
const addBookButton = document.querySelector('#add-book button');
let deleteButton = document.querySelector('table');

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
        let newBookId = document.createElement('td');
        let newBookAutor = document.createElement('td');
        let newBookCreated = document.createElement('td');
        let newBookUpdate = document.createElement('td');
        let newBookButton = document.createElement('span');
        newBookButton.classList.add('delete');
        newBookButton.innerText = "excluir";
        newBookId.innerText = booksToLoad[i].id;
        newBookName.innerText = booksToLoad[i].name;
        newBookAutor.innerText = booksToLoad[i].author;
        newBookCreated.innerText = booksToLoad[i].created_at;
        newBookUpdate.innerText = booksToLoad[i].updated_at;
        newBookId.classList.add('id');
        newBookLine.appendChild(newBookId);
        newBookLine.appendChild(newBookName);
        newBookLine.appendChild(newBookAutor);
        newBookLine.appendChild(newBookCreated);
        newBookLine.appendChild(newBookUpdate);
        newBookLine.appendChild(newBookButton);
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
        let newBookId = document.createElement('td');
        let newBookCreated = document.createElement('td');
        let newBookUpdate = document.createElement('td');
        let newBookButton = document.createElement('span');
        newBookButton.innerText = "excluir";
        newBookId.innerText = responseAsJson.id;
        newBookName.innerText = responseAsJson.name;
        newBookAutor.innerText = responseAsJson.author;
        newBookCreated.innerText = responseAsJson.created_at;
        newBookUpdate.innerText = responseAsJson.updated_at;
        newBookButton.classList.add('delete');
        newBookId.classList.add('id');
        newBookLine.appendChild(newBookId);
        newBookLine.appendChild(newBookName);
        newBookLine.appendChild(newBookAutor);
        newBookLine.appendChild(newBookCreated);
        newBookLine.appendChild(newBookUpdate);
        newBookLine.appendChild(newBookButton);
        newBookListItem.appendChild(newBookLine);
        
    })
}

addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    Post(newBook[0].value,newBook[1].value);
})

function deletarLivroPeloID(id) {
    fetch(`https://treinamento-api.herokuapp.com/books/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        if (response.status === 404) alert("Excluído");
        else console.log(response);
    }).catch((err) => {
        alert(err)
    })
}

deleteButton.addEventListener('click', (e) => {
    if(e.target.nodeName==='SPAN' && e.target.className === 'delete'){
        deletarLivroPeloID(e.target.parentNode.querySelector(".id").innerText);
        e.target.parentNode.remove();
    }
});