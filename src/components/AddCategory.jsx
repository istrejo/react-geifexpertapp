import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCategory.css';

export const AddCategory = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = e => {
      setInputValue(e.target.value);
   };
   const handleSubmit = e => {
      e.preventDefault();

      if (inputValue.trim().length > 2) {
         setCategories(prev => [inputValue, ...prev]);
         setInputValue('');
      }
      console.log('Enviado');
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            placeholder='Search any gifs'
            value={inputValue}
            onChange={handleInputChange}
         />
      </form>
   );
};

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,
};
