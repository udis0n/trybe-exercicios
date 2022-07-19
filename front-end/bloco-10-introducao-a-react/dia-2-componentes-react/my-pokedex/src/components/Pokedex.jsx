import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemonsElements = pokemons.map((creature) => (
      <Pokemon pokemon={creature} />
    ));

    return <div className='cards__container'>{pokemonsElements}</div>;
  }
}

export default Pokedex;
