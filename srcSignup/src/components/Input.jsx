import React, { Component } from 'react';

function Input (props) {
  return (
    <div className="mdc-textfield">
      <input
        type={props.type}
        name={props.name}
        className='mdc-textfield__input'
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
