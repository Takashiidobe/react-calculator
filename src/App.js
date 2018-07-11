import React, { Component } from "react";
import "./App.css";

//This encapsulates the calculator app itself
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //total is for the final result shown
      total: "",
      //runningNumber is the number we're currently on (in 9 + 8, the 8)
      runningNumber: "",
      //databank shows the first number that we've committed to memory
      databank: "",
      //operator is which operator we've set to
      operator: undefined
    };
  }

  //sets us back to the original state
  clear = () => {
    this.setState({
      runningNumber: "",
      operator: undefined,
      total: "",
      databank: ""
    });
  };

  calculateFactorial = num => {
    if (num < 0) {
      return NaN;
    } else if (num === 0) {
      return NaN;
    } else if (num === 1) {
      return num;
    } else if (num > 1) {
      return num * this.calculateFactorial(num - 1);
    }
  };

  //set to dividing mode
  setOperator = () => {
    this.setState({
      operator: ""
    });
  };

  setFactorial = () => {
    this.setState({ operator: "!" });
  };

  setDiv = () => {
    this.setState({ operator: "/" });
  };

  setAdd = () => {
    this.setState({ operator: "+" });
  };

  setSub = () => {
    this.setState({ operator: "-" });
  };

  setMul = () => {
    this.setState({ operator: "*" });
  };

  setPow = () => {
    this.setState({ operator: "^" });
  };

  setSqu = () => {
    this.setState({ operator: "√" });
  };

  setEqual = () => {
    if (this.state.operator === "*") {
      this.setState({ total: this.state.runningNumber * this.state.databank });
    } else if (this.state.operator === "/") {
      this.setState({ total: this.state.runningNumber / this.state.databank });
    } else if (this.state.operator === "+") {
      this.setState({ total: this.state.runningNumber + this.state.databank });
    } else if (this.state.operator === "-") {
      this.setState({ total: this.state.runningNumber - this.state.databank });
    } else if (this.state.operator === "^") {
      this.setState({ total: this.state.runningNumber ** this.state.databank });
    } else if (this.state.operator === "√") {
      this.setState({ total: Math.pow(this.state.runningNumber, 0.5) });
    } else if (this.state.operator === "!") {
      this.setState({
        total: this.calculateFactorial(this.state.runningNumber)
      });
    } else if (this.state.operator === undefined) {
      this.setState({
        total: this.state.runningNumber,
        runningNumber: ""
      });
    }
    setTimeout(() => {
      console.log(this.state.total);
    }, 0);
  };

  addOne = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "1" })
      : this.setState({ databank: this.state.databank + "1" });
  };

  addTwo = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "2" })
      : this.setState({ databank: this.state.databank + "2" });
  };

  addThree = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "3" })
      : this.setState({ databank: this.state.databank + "3" });
  };

  addFour = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "4" })
      : this.setState({ databank: this.state.databank + "4" });
  };

  addFive = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "5" })
      : this.setState({ databank: this.state.databank + "5" });
  };

  addSix = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "6" })
      : this.setState({ databank: this.state.databank + "6" });
  };

  addSeven = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "7" })
      : this.setState({ databank: this.state.databank + "7" });
  };

  addEight = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "8" })
      : this.setState({ databank: this.state.databank + "8" });
  };

  addNine = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "9" })
      : this.setState({ databank: this.state.databank + "9" });
  };

  addZero = () => {
    this.state.operator === undefined
      ? this.setState({ runningNumber: this.state.runningNumber + "0" })
      : this.setState({ databank: this.state.databank + "0" });
  };

  //renders the calculator itself
  render() {
    return (
      <div className="App">
        {/* Titles the calculator */}
        <div className="title">React Calculator</div>

        {/* Display */}
        <div id="display">
          {this.state.total && `Total: ${this.state.total}`}
          <br />
          {this.state.runningNumber &&
            `RunningNumber: ${this.state.runningNumber}`}
          <br />
          {this.state.operator && `Operator: ${this.state.operator}`}
          <br />
          {this.state.databank && `Databank: ${this.state.databank}`}
        </div>

        {/* Numbers */}
        <div id="numbers">
          <div className="row">
            <button id="1" onClick={this.addOne}>
              1
            </button>
            <button id="2" onClick={this.addTwo}>
              2
            </button>
            <button id="3" onClick={this.addThree}>
              3
            </button>
          </div>
          <div className="row">
            <button id="4" onClick={this.addFour}>
              4
            </button>
            <button id="5" onClick={this.addFive}>
              5
            </button>
            <button id="6" onClick={this.addSix}>
              6
            </button>
          </div>
          <div className="row">
            <button id="7" onClick={this.addSeven}>
              7
            </button>
            <button id="8" onClick={this.addEight}>
              8
            </button>
            <button id="9" onClick={this.addNine}>
              9
            </button>
          </div>
          <div className="row">
            <button id="0" onClick={this.addZero}>
              0
            </button>
            {/* operators */}
            <button id="add" onClick={this.setAdd}>
              +
            </button>
            <button id="sub" onClick={this.setSub}>
              -
            </button>
          </div>

          <div className="row">
            <button id="mul" onClick={this.setMul}>
              x
            </button>
            <button id="div" onClick={this.setDiv}>
              /
            </button>
            <button id="equ" onClick={this.setEqual}>
              =
            </button>
          </div>

          <div className="row">
            <button id="pow" onClick={this.setPow}>
              ^
            </button>
            <button id="sqr" onClick={this.setSqu}>
              √
            </button>
            <button id="clear" onClick={this.clear}>
              CLEAR
            </button>
          </div>

          <div className="row">
            <button id="fac" onClick={this.setFactorial}>
              !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
