import React,{useState} from 'react';
import { InputUI } from '../InputUI/InputUI';
import { GifImg } from '../GifImg/GifImg';
import axios from 'axios';
import { ButtonUI } from '../ButtonUI/ButtonUI';

// Docs: https://tenor.com/developer/dashboard
// Docs2: https://tenor.com/gifapi/documentation#endpoints
// api_key: DMHFGEWPEFHD

export const GetCards = () => {

  const [cards, setCards] = useState([]);
  const URL = "https://g.tenor.com/v1/trending?key=DMHFGEWPEFHD";
  
  const customGif = (event) => {

    const URL = "https://g.tenor.com/v1/search?"  
    const key = "DMHFGEWPEFHD";
    const query = `q=${event.target.value}`
    const limit = "&limit=16";

    fetch(`${URL}${query}&key=${key}${limit}`)
    .then(response => response.json())
    .then(data => setCards(data.results))
  }

  const getGifs = () => {      
    fetch(URL)    
    .then(response => response.json())
    .then(data => {      
      setCards(data.results);

    })      
  }  
  
  return (
    <>
      <h1>Gif Generator</h1>
      <hr />
      <InputUI event={customGif} />
      <ButtonUI trying={getGifs} />
      <main className='main-gif'>
        {
          cards.map(card => (
            <GifImg
            key={card.id}
            image={card.media[0].mediumgif.url}
            name={card.content_description}
            />))
        }
      </main>    
    </>
  )
}
