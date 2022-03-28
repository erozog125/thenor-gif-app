import React,{useState} from 'react';
import { InputUI } from '../InputUI/InputUI';
import { GifImg } from '../GifImg/GifImg';
import axios from 'axios';

// Docs: https://tenor.com/developer/dashboard
// Docs2: https://tenor.com/gifapi/documentation#endpoints

export const GetCards = () => {

  const [gif, setGif] = useState([]);
  const URL = "https://g.tenor.com/v1/search?";
  const api_key = "api_key=B5S1TNIXJSEY";
  const query = "&q="
  const limit = "&limit=16";


  const getGifs = (event) => {
    axios.get(`${URL}${api_key}${query}${encodeURI(event.target.value)}${limit}`)    
    .then(response => {
      setGif(response.data.data);
      console.log(response.data.data);      
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <h1>Gif Generator</h1>
      <hr />
      <InputUI event={getGifs} />
      <main className='main-gif'>
        {
          gif.map(card => (
            <GifImg
            key={card.id+card.title}
            image={card.media[0].gif.url}
            name={card.title}
            />))
        }
      </main>    
    </>
  )
}
