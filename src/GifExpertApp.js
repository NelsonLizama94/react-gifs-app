import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const initialState = ['Dragon Ball'];
  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>

      <ol>
        { // El KEY no debe ser el indice
          categories.map((category, index) => (
            <GifGrid 
              key={category}
              category={category} 
            />
          ))
        }
      </ol>
    </>
  );
};


GifExpertApp.propTypes = {

};


export default GifExpertApp;