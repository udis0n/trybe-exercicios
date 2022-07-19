import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;

    return (
      <div className='card'>
        <div className='card__text'>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weight: {value} {measurementUnit}
          </p>
        </div>
        <div className='card__img'>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
