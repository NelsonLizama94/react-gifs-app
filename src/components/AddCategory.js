import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {

  const [inputCategory, setInputCategory] = useState('');

  const handleInputChange = (event) => {
    setInputCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputCategory.trim().length > 2) {
      setCategories(prevItems => [inputCategory, ...prevItems]);
      setInputCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputCategory}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory

