import React,{useState} from 'react';
import { InputUI } from '../InputUI/InputUI';
import { GifImg } from '../GifImg/GifImg';
import axios from 'axios';

// Docs: https://tenor.com/developer/dashboard
// Docs2: https://tenor.com/gifapi/documentation#endpoints
// api_key: B5S1TNIXJSEY

export const GetCards = () => {

  const [gif, setGif] = useState([]);
  const URL = "https://g.tenor.com/v1/search?";
  const key = "B5S1TNIXJSEY";
  const query = "&q="
  const limit = "&limit=16";


  const getGifs = (event) => {
    console.log(event.target.value);
    if (event.keyCode == 13) {
      console.log('entra');
      // axios.post(`${URL}${key}${query}${encodeURI(event.target.value)}${limit}`)    
      fetch(`${URL}${key}${query}${event.target.value}${limit}`)    
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGif(data.results);
      })      
    }
  }

  return (
    <>
      <h1>Gif Generator</h1>
      <hr />
      <InputUI event={getGifs} />
      <main className='main-gif'>
        {/* {
          gif.map(card => (
            <GifImg
            key={card.id+card.title}
            image={card.media[0].gif.url}
            name={card.title}
            />))
        } */}
      </main>    
    </>
  )
}
