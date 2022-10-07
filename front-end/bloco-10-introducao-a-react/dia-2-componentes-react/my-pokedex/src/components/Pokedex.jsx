import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };
  }

  render() {
    const { page } = this.state;

    const pokemonsElements = pokemons.map((creature) => (
      <Pokemon pokemon={creature} />
    ));

    const nextPage = () => {
      const { page } = this.state;
      if (page === pokemonsElements.length - 1) {
        this.setState({
          page: 0,
        });
        return;
      }
      this.setState({
        page: page + 1,
      });
    };

    const previewsPage = () => {
      const { page } = this.state;
      if (page === 0) {
        this.setState({
          page: pokemonsElements.length - 1,
        });
        return;
      }
      this.setState({
        page: page - 1,
      });
    };

    return (
      <div className="cards__container">
        {pokemonsElements[page]}
        <div>
          <button onClick={previewsPage}>previews</button>
          <button onClick={nextPage}>next</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
