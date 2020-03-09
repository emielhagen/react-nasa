import React, { Component } from 'react'

const ButtonComponent = (props) => {
  return (
    <div className="guessing">
      <button>{props.name}</button>
    </div>
    )
}

export default ButtonComponent;
