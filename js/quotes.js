const quotes = [
    {
        quote: "Do not go gentle into that good night.",
        author: "Dylan Thomas",
    },
    {
        quote: "Old age should burn and rave at close of day.",
        author: "Dylan Thomas",
    },
    {
        quote: "Rage, rage against the dying of the light.",
        author: "Dylan Thomas",
    },
    {
        quote: "Though wise men at their end know dark is right",
        author: "Dylan Thomas",
    },
    {
        quote: "Because their words had forked no lightning they",
        author: "Dylan Thomas",
    },
    {
        quote: "Good men, the last wave by, crying how bright",
        author: "Dylan Thomas",
    },
    {
        quote: "Their frail deeds might have danced in a green bay",
        author: "Dylan Thomas",
    },
    {
        quote: "Wild men who caught and sang the sun in flight",
        author: "Dylan Thomas",
    },
    {
        quote: "And learn, too late, they grieved it on its way",
        author: "Dylan Thomas",
    },
    {
        quote: "Grave men, near death, who see with blinding sight",
        author: "Dylan Thomas",
    },
    {
        quote: "Blind eyes could blaze like meteors and be gay",
        author: "Dylan Thomas",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;