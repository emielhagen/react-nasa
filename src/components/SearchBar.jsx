import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  handleSearchButton = (query) => {
    this.props.searchFunction(query);
  }

  spaceBodies = () => {
    const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
      return spaceWords.map(word =>
        <div className="guessing">
          <button onClick={ e => this.handleSearchButton(e.target.innerText)} id={word}>{word}</button>
        </div>
      )
  }

  renderGame = () => {
    return <div className="namegamebutton">{this.spaceBodies()}</div>
  }


  render() {
    return(
      <div>
        <h2>Pick the one you like</h2>
        { this.renderGame() }
        <input
          placeholder='Type here to find other gifs!'
          value={this.state.term}
          type="text" className="form-control form-input"
          onChange={this.handleUpdate}/>
      </div>
    );
  }
}

export default SearchBar;
