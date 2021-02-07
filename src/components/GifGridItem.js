import React from 'react';
import PropTypes from 'prop-types';

function GifGridItem({ id, title, url }) {
  return (
    <div className="card animate__animated animate__rubberBand">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
};

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifGridItem;

