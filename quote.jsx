import React from 'react';
import'./quote.css'
import { useState } from 'react';

const quote = () => {
    const quoteList=[
        {//id:"1",
          description:"I'm not here to be perfect, I'm here to be real.",
        author:"Lady Gaga"
        },
        {//id:"2",
          description:"I'm not interested in money. I just want to be wonderful.",
        author:" Marilyn Monroe"
        },
        {//id:"3",
          description:"The only thing that feels better than winning is winning when nobody thought you could.",
          author:" Hank Aaron"
        },
        {//id:"4",
          description:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill"
          },
        {//id:"5",
          description:"If you can dream it, you can do it.",
        author:"Walt Disney"
        },
        {//id:"6",
          description:"If you want something done, ask a busy person to do it.",
        author:"Laura Ingalls Wilder"
        },
        {//id:"7",
          description:"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        author:"John Quincy Adams"
        },
          ];

const {randomQuote,setRandomQuote}= useState=({
    description:"If you want something done, ask a busy person to do it",
    author:"Laura Ingalls Wilder"
});



const random =()=>{
    const select = quoteList[Math.floor(Math.random()*quoteList.lenght)];
setRandomQuote(select)
};



    return (
    <div>
        <div className='container'>
      <div className="quote-text">
        <h3>{randomQuote.description} </h3>
      </div>
      <div className="quote-line"></div>
            <div className="quote-last-line">
        <div className="quote-author">
            <h4>{randomQuote.author}</h4>
     </div>
     <div className="button">
        <button onClick={()=>{random()}} >Re-Generate</button>
     </div>
      </div>
    </div>

   </div>
    )
};


export default quote;






  

