import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Header } from './components/Header';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['Dragon ball']);

   return (
      <>
         <Header />
         <AddCategory setCategories={setCategories} />

         {categories.map(category => (
            <GifGrid key={category} category={category} />
         ))}
      </>
   );
};
