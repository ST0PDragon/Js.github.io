const quotes = [
  {
    quote: "i never dreamed about success, i worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be orginal, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D, Rockefeller",
  },
  {
    quote:
      "if you  can't fly then run, if you cannot run,then walk, And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up, The most certain way to succeed is always to try just one more time",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every moring and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worese than starting someting and falling. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "if you really want to do something, you will find a way. if you do net. you will find an excuse",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
