import React, { Component } from 'react';
import InputField from './Components/InputField';
import Validation from './Components/Validation';
import CharComponent from './Components/Char';
import './App.css';

class App extends Component {

  state = { text : ""}

  changedHandler = (event) => {
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) => {
    const mytext = this.state.text.split('');
    mytext.splice(index, 1);
    const updatedText = mytext.join('');
    this.setState({text: updatedText});
  }

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}
      />;
    });

    return (
      <div className="App">
        <InputField 
          text={this.state.text}
          changed={this.changedHandler} 
        />
        <Validation 
          text={this.state.text}
        />
        <input 
          type="text" 
          onChange={this.changedHandler} 
          value={this.state.text} 
        />
        <p>{this.state.text}</p>
        {charList}
      </div>
    );
  }
}

export default App;
