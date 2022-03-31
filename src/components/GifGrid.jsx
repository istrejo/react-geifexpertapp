import React from 'react';
import { GifGridItem } from './GifGridItem';
import '../styles/GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
   const { data: images, loading } = useFetchGifs(category);

   console.log(loading);

   return (
      <div className='container'>
         <h3 className='animate__animated animate__bounceInUp'>{category}</h3>
         {loading && (
            <p className='animate__animated animate__flash'>Laoding...</p>
         )}
         <div className='cards-container'>
            {images.map(img => (
               <GifGridItem key={img.id} img={img} {...img} />
            ))}
         </div>
      </div>
   );
};
