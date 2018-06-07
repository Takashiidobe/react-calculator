import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      runningNumber: '',
      databank: '',
      operator: undefined
    }
  } 

  setDiv = () => {
    this.setState({ operator: '/' });
  }

  setAdd = () => {
    this.setState({ operator: '+' });
  }

  setSub = () => {
    this.setState({ operator: '-' });
  }

  setMul = () => {
    this.setState({ operator: '*' });
  }

  setPow = () => {
    this.setState({ operator: '^' });
  }

  setSqu = () => {
    this.setState({ operator: '√' });
  }

  setEqual = () => {
    if (this.state.operator === '*') {
      this.setState({ total: this.state.runningNumber * this.state.databank});
    } else if (this.state.operator === '/') {
      this.setState({ total: this.state.runningNumber / this.state.databank });
    } else if (this.state.operator === '+') {
      this.setState({ total: this.state.runningNumber + this.state.databank });
    } else if (this.state.operator === '-') {
      this.setState({ total: this.state.runningNumber - this.state.databank });
    } else if (this.state.operator === '^') {
      this.setState({ total: this.state.runningNumber ** this.state.databank });
    } else if (this.state.operator === '√') {
      this.setState({ total: Math.pow(this.state.runningNumber, 0.5) });
    } else if (this.state.operator === undefined) {
      this.setState({ 
        total: this.state.runningNumber,
        runningNumber: ''
      });
    }
    setTimeout(() => {console.log(this.state.total); }, 0);
  }

  clear = () => {
    this.setState({ runningNumber : ''});
    this.setState({ operator: undefined });
    this.setState({ total: '' });
    this.setState({ databank: '' });
  }

  addOne = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '1' }) :
    this.setState({ databank: this.state.databank + '1' });
  }

  addTwo = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '2' }) :
    this.setState({ databank: this.state.databank + '2' });
  }

  addThree = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '3' }) :
    this.setState({ databank: this.state.databank + '3' });
  }

  addFour = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '4' }) :
    this.setState({ databank: this.state.databank + '4' });
  }

  addFive = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '5' }) :
    this.setState({ databank: this.state.databank + '5' });
  }

  addSix = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '6' }) :
    this.setState({ databank: this.state.databank + '6' });
  }

  addSeven = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '7' }) :
    this.setState({ databank: this.state.databank + '7' });
  }

  addEight = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '8' }) :
    this.setState({ databank: this.state.databank + '8' });
  }

  addNine = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '9' }) :
    this.setState({ databank: this.state.databank + '9' });
  }

  addZero = () => {
    this.state.operator === undefined ?
    this.setState({ runningNumber: this.state.runningNumber + '0' }) :
    this.setState({ databank: this.state.databank + '0' });
  }

  render() {
    return (
      <div className="App">
      
      {/* Display */}
      <div id="display">
      Total:
      {this.state.total}
      <br />
      RunningNumber:
      {this.state.runningNumber}
      <br />
      Operator:
      {this.state.operator}
      <br />
      Databank:
      {this.state.databank}
      </div>

      {/* Numbers */}
      <div id="numbers">
      <button id="1" onClick={this.addOne}>1</button>
      <button id="2" onClick={this.addTwo}>2</button>
      <button id="3" onClick={this.addThree}>3</button>
      <button id="4" onClick={this.addFour}>4</button>
      <button id="5" onClick={this.addFive}>5</button>
      <button id="6" onClick={this.addSix}>6</button>
      <button id="7" onClick={this.addSeven}>7</button>
      <button id="8" onClick={this.addEight}>8</button>
      <button id="9" onClick={this.addNine}>9</button>
      <button id="0" onClick={this.addZero}>0</button>
      </div>
      
      {/* operators */}
      <div id="operators">
      <button id="add" onClick={this.setAdd}>+</button>
      <button id="sub" onClick={this.setSub}>-</button>
      <button id="mul" onClick={this.setMul}>x</button>
      <button id="div" onClick={this.setDiv}>/</button>
      <button id="equ" onClick={this.setEqual}>=</button>
      <button id="pow" onClick={this.setPow}>^</button>
      <button id="sqr" onClick={this.setSqu}>√</button>
      <button id="clear" onClick={this.clear}>CLEAR</button>
      </div>
      </div>
    );
  }
}

export default App;

