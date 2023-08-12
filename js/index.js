
let qoutes = [

    {
        qoute: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        qoute: "So many books, so little time.",
        author: "― Frank Zappa"
    },
    {
        qoute: "A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero"
    },
    {
        qoute: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "― Bernard M. Baruch"
    },
    {
        qoute: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        qoute: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "― Andre Gide, Autumn Leaves"
    },
    {
        qoute: "Insanity is doing the same thing, over and over again, but expecting different results.",
        author: "― Narcotics Anonymous"
    },
    {
        qoute: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "― Ralph Waldo Emerson"
    },
    {
        qoute: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "― Oscar Wilde, The Happy Prince and Other Stories"
    } 
]

let newQuoteBtn = document.getElementById("newQuoteBtn");
newQuoteBtn.addEventListener("click",displayQuotes);
let quote = document.querySelector(".quote");

function displayQuotes() {
    let index = Math.floor(Math.random() * qoutes.length);

    document.getElementById("quote").innerHTML = qoutes[index].qoute;
    document.getElementById("author").innerHTML = qoutes[index].author;
    quote.classList.replace("d-none","d-block");
}