import React from 'react';
import '../styles/GifGridItem.css';

export const GifGridItem = ({ id, title, url }) => {
   // console.log({ id, title, url });
   return (
      <div className='card animate__animated animate__bounceInUp'>
         <img src={url} alt={title} />
         <div className='capa'>
            <h3>{title}</h3>
         </div>
      </div>
   );
};
