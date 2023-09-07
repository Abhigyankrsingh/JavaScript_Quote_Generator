
let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('person');


const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
    
        quote.innerText = item.content;
        person.innerText = item.person;

    });
    
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);