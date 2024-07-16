let btn = document.querySelector('#new-quote');
let newQuote = document.querySelector('.quote');
let person = document.querySelector('person');
let quotesArray = [];
function fetchQuotes(){
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        quotesArray = data;
    })
    .catch(error => console.error('Error fetching quotes:', error));
}
function getRandomQuotes(){
    if (quotesArray.length === 0) {
        return "No quotes available.";
    }
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

function quotes(){
    const quoteList = getRandomQuotes();
    let quoteText = quoteList.text;
    //let author =  quoteList.autor ? quoteList.autor : "Unknown";

    newQuote.textContent = quoteText;
   // person.textContent = author;
}

btn.addEventListener('click', quotes);

fetchQuotes();


