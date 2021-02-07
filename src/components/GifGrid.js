import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

function GifGrid({ category }) {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__rubberBand">{category}</h3>
      { loading && <p className="card animate__animated animate__flash">Cargando...</p> }
      <div className="card-grid">
        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
