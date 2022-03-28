import React from 'react';

export const GifImg = ({image, name}) => {
  return (
    <div className='div-img'>
      <img className='img-gif' src={image} alt={name} />
    </div>
  )
}
