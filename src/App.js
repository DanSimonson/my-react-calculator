import React, { Component } from 'react';
import './App.css';
import * as math from "mathjs";
import Footer from './Footer'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ''
    }
  };
  addToInput = (param, e) => {
    let newString = this.state.result;
    let stringLength = this.state.result.length;
    var lastChar = newString.substr(newString.length - 1);
    if (param === "0" && stringLength <= 1) {
      this.setState({ result: param })
    } else if (newString.length >= 3) {
      if (param === '0') {
        if (lastChar === '0') {
          //&& param === 0
          //&& lastChar == '0'
          let noMultipleZerosString = newString;/*newString.slice(0, -1);*/
          this.setState({ result: noMultipleZerosString })
        } else {
          this.setState({ result: this.state.result + param });
        }
      }
      else {
        this.setState({ result: this.state.result + param });
      }
    }else {
      this.setState({ result: this.state.result + param });
      console.log('result: ', this.state.result);
    }


  }
  clear = () => {
    this.setState({
      result: ''
    });
  }
  math = (operator, e) => {
    //get last char in data string
    const lastChar = this.state.result[this.state.result.length - 1];
    //check if last character is an operand
    const bool = ["*", "+", "-", "/"].includes(lastChar);
    if (bool) {
      //if last element an operator, remove it
      this.setState({ result: this.state.result.slice(0, this.state.result.length - 1) });
    } else {
      //just append operand      
      this.setState({ result: this.state.result + operator })
    }
  }
  unique(operator) {
    //two '.' operators will not be accepted in one number
    if (this.state.result.includes(".") === false) {
      this.setState({ result: this.state.result + operator })
    }
  }
  equal() {
    let result = this.state.result;
    let total = math.eval(result);
    this.setState({ result: total });
  }
  render() {
    return (
      <div className="App">
        <div className='wrap'>
          <div className='calculator'>
            <div id="display" className="btn">{this.state.result}</div>
            <div id="clear" className="btn" onClick={() => this.clear()}>C</div>
            <div id="divide" className="btn operator" onClick={(e) => this.math('/', e)}>&#247;</div>
            <div id="seven" className="btn" onClick={(e) => this.addToInput('7', e)}>7</div>
            <div id="eight" className="btn" onClick={(e) => this.addToInput('8', e)} > 8</div >
            <div id="nine" className="btn" onClick={(e) => this.addToInput('9', e)}> 9</div >
            <div id="multiply" className="btn operator" onClick={(e) => this.math('*', e)}>&#215;</div >
            <div id="four" className="btn" onClick={(e) => this.addToInput('4', e)}> 4</div >
            <div id="five" className="btn" onClick={(e) => this.addToInput('5', e)}> 5</div >
            <div id="six" className="btn" onClick={(e) => this.addToInput('6', e)}> 6</div >
            <div id="subtract" className="btn operator" onClick={(e) => this.math('-', e)}>&#8722;</div >
            <div id="one" className="btn" onClick={(e) => this.addToInput('1', e)}> 1</div >
            <div id="two" className="btn" onClick={(e) => this.addToInput('2', e)}> 2</div >
            <div id="three" className="btn" onClick={(e) => this.addToInput('3', e)}> 3</div >
            <div id="add" className="btn operator" onClick={(e) => this.math('+', e)}>&#43;</div >
            <div id="zero" className="btn" onClick={(e) => this.addToInput('0', e)}> 0</div >
            <div id="decimal" className="btn" onClick={(e) => this.unique('.', e)}>.</div >
            <div id="equals" className="btn operator" onClick={(e) => this.equal()}>=</div >
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
