const loadQuote=()=>{
fetch('https://api.kanye.rest/')
.then(res=>res.json())
.then(data=>displayQuote(data))
}
// show it on UI
const  displayQuote=(quote)=>{
    const blockQuotes=document.getElementById('quote')
console.log(quote);
    blockQuotes.innerText=quote.quote
    
}

