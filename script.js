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
        console.log(booksToLoad[i]);
    }
})