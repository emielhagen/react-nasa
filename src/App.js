import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Game from './components/Game'
import GifApp from './components/GifApp.jsx'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  state = {
    images: []
  }


//The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.collection.items })
      });
  }

  //the welcome component has the header/navbar and the button to choose to search is toggled
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/gif_app" component={GifApp} />

            <Route
             path="/search"
             render={(props) => <SearchForm {...props} fetchImages={this.fetchImages} />}
            />
            <Route
             path="/search"
             render={(props) => <SearchResults {...props} getResults={this.state.images} />}
            />
          </div>
        </BrowserRouter>
      )
    }

}
