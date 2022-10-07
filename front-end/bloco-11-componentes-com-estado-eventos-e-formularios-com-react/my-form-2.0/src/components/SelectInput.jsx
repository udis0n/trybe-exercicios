import React, { Component } from 'react';

export default class SelectInput extends Component {
  render() {
    const { listOfOptions, handleChange, name, required } = this.props;
    return (
      <label>
        Estado
        <select name={name} onChange={handleChange} required={required}>
          <option value="">Selecione um Estado</option>
          {listOfOptions}
        </select>
      </label>
    );
  }
}
