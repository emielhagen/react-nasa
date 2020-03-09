import React, { Component } from 'react'

class ButtonComponent extends Component {
  render(){
    return(
      <div className="buttoncontainer">
        <button>{this.props.name}</button>
      </div>
    )
  }

}

export default ButtonComponent;
