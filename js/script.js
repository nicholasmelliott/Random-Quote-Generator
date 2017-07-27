//EXTRA CREDIT: tag properties added
const quotes = [
    {quote: "Wishing to be sincere in their thoughts, they first extended  to the utmost of their knowledge.",
     source: "Confucius",
     citation: "Book of Rites",
     year: undefined,
     tags: ["Self-growth", "Philosophy"]}, 
    {quote: "If you're tired of starting over, stop giving up.",
     source: "Shia Labeouf",
     citation: "#INTRODUCTIONS",
     year: "2015",
     tags: ["Motivational", "Pop-culture"]},
    {quote: "There's only room in here for one. And I've decided it's not you.",
     source: "Stone Sour",
     citation: "House of Gold and Bones part 1",
     year: "2013",
     tags: ["Self-realization", "Lyrics"]},
    {quote: "From the moment they wake, they devote themselves to the perfection of whatever they pursue.",
     source: "Nathan Algren",
     citation: "The Last Samurai",
     year: "2003",
     tags: ["Mastery", "Movies"]},
    {quote: "Who cares if one more light goes out in the sky of a million stars? I do.",
     source: "Chester Bennington",
     citation: "One More Light",
     year: "2017",
     tags: ["Remembrance", "Lyrics"]},
    {quote: "The more you seek the uncomfortable, the more you will become comfortable.",
     source: "Connor McGregor",
     citation: undefined,
     year: undefined,
     tags: ["Self-realization", "Motivation"]},
    {quote: "I was never more certain of how far away I was from my goal than when I was standing right beside it.",
     source: "Vincent Freeman",
     citation: "Gattaca",
     year: "1997",
     tags: ["Reality", "Movies"]}];

const totalQuotes = 7;
let intervalNum = 30000;
let quotesUsed = [];
let quotePos = 0;
//EXTRA CREDIT: refreshes quote/background color every 30 seconds 
let timer = setInterval(() => printQuote() ,30000);

//Generates random number between 0 and "mult" param
const randomNum = (mult) => {
    return Math.floor(Math.random() * mult);
};

//selects random quote object from quotes array
const getRandomQuote = () => {
    //EXTRA CREDIT:
    //checks quotesUsed[] against random number to see if it has been drawn before 
    //If so, will fire again until new random number is not in quotesUsed[]
    do{
        quotePos = randomNum(totalQuotes);
    }while(quotesUsed.includes(quotePos));
    //adds the randomly drawn number to quotesUsed[]
    quotesUsed.push(quotePos);
    
    //EXTRA CREDIT: quotes logged to console to show non-repeat
    console.log("[" + quotePos + "] " + quotes[quotePos].quote);
    
    if(totalQuotes === quotesUsed.length) {
        quotesUsed = [];
        console.log("***All quotes used once.***")
    };
    return quotes[quotePos];
};

const quoteTemplate = (quote) => {
    //If quotes object property is undefined it will not be displayed
    let quoteTemp = 
        "<p class='quote'>" + quote.quote + "</p>" +
        "<p class='source'> " + quote.source;
    if(typeof quote.citation !== "undefined"){
        quoteTemp += "<span class='citation'>" + quote.citation + "</span>";    
    };
    if(typeof quote.year !== "undefined"){
        quoteTemp += "<span class='year'>" + quote.year + "</span>";    
    };
    quoteTemp += "</p>";
    return quoteTemp;
};

const printQuote = () => {
    
    let randomQuote = getRandomQuote();
    let quoteCreated = quoteTemplate(randomQuote); 
    document.getElementById('quote-box').innerHTML = quoteCreated;
    changeBackgroundColor();
    resetTimer();
};

//EXTRA CREDIT: function for randomly changing background color
const changeBackgroundColor = () => {
    
    const randomNumber = randomNum(240);
    const randomNumber1 = randomNum(240);
    const randomNumber2 = randomNum(240);
    
    document.querySelector('body').style.backgroundColor = "rgb("+randomNumber+","+randomNumber1+","+randomNumber2+")";
};

//Updates timer variable: 30 seconds from button click until quote/background changes 
const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => printQuote() ,30000);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", () =>{
    printQuote();
}, false);



