import React, { Component } from 'react';
import { Keyboard } from './components/molecules/Keyboard/Keyboard';
import { Nav } from './components/molecules/Nav/Nav';
import { Word } from './components/molecules/Word/Word';
import { Reset } from './components/atoms/Reset/Reset';
import DATA from './words.json';

import './App.css';

class App extends Component {

  state = {
    word: '',
    tip: '',
    score: 0,
    foundLetters: [],
  };

  componentDidMount() {
    const random = Math.floor(Math.random() * DATA.words.length); 
    const wordSelected = DATA.words[random].value;
    const tipSelected = DATA.words[random].tips;

    this.setState({word : wordSelected, tip: tipSelected});
  }
  
  onKeyClicked = (event) => {
    const value = event.target.value;
    const foundLetters = this.state.foundLetters;
    let score = this.state.score;

    if (!this.state.foundLetters.includes(value)) {

      if ( !this.state.word.includes(value)) {
        score++;
      }

      foundLetters.push(value);
    }

    this.setState({ foundLetters, score }) 

  };

  onReset = (e) => {
    const random = Math.floor(Math.random() * DATA.words.length); 
    const wordSelected = DATA.words[random].value;
    const tipSelected = DATA.words[random].tips;

    this.setState({});
    this.setState({
      word : wordSelected,
      tip: tipSelected,
      score: 0,
      foundLetters: []
    });
  };

  checkedWin = () => {
    let word = this.state.word;

    for (var i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (!this.state.foundLetters.includes(char)) {
        return false;
      }
    }
      
    return true;
  };

  render() {

    if( this.state.score === 10) {

      return(
        <div className="alert">
          <h1 className="alert__text">Loose !</h1>
          <Reset className="alert__button" onReset={(e) => this.onReset(e)}/>
        </div>
      );
    }

    if (this.checkedWin()) {
      return (
        <div className="alert">
            <h1 className="alert__text">Win !</h1>
            <Reset className="alert__button" onReset={(e) => this.onReset(e)}/>
        </div>
      );
    }

    return (
      <div>
        <Nav score={this.state.score} />
        <Word tips={this.state.tip} word={this.state.word} foundLetters={this.state.foundLetters}/> 
        <Keyboard foundLetters={this.state.foundLetters} onKeyClicked={ (e) => this.onKeyClicked(e) } onReset={(e) => this.onReset(e)}/>
      </div>
    );
  }
}

export default App;
