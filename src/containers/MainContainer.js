import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent'

export default class MainContainer extends Component {
  render() {
    return(
      <div>
        <div className="namegamebutton">
          <Link to="/search"><ButtonComponent name="Search!" /></Link>
          <Link to="/game"><ButtonComponent name="Play!" /></Link>
          <Link to="/gif_app"><ButtonComponent name="Gifs!" /></Link>
        </div>
      </div>
    )
  }
}
