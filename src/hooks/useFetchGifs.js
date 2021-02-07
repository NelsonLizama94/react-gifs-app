import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // Si no se le pasan condiciones al segundo parámetro del useEffect, este sólo ejecutará el código en su interior la primera vez que el Componente es renderizado
  useEffect(() => {

    getGifs(category)
      .then( imgs => {
        setState({
          data: imgs,
          loading: false
        })
      });

  }, [category]);

  return state;

};
