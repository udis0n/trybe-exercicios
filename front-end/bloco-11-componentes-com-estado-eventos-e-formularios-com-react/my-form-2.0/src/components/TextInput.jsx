import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    const { name, labelName, maxLength, handleChange, state, required } = this.props;

    return (
      <div>
        <label>
          {labelName}
          <input
            name={name}
            value={state}
            type="text"
            maxLength={maxLength}
            onChange={handleChange}
            required={required}
          />
        </label>
      </div>
    );
  }
}
