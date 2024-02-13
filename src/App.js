import React from 'react';
import './App.css';
import { MyForm, Mybutton, Mytable } from './inputForm';
import { HomePage } from './homePage';
class App extends React.Component {

  // callbackFunction(name) {

  //   console.log(name)
  //   // this.setState("blockSection", name)
  // }

  // componentDidMount(){
  //   // this.callbackFunction()
  //   validateInput()
  //   fetchCart()
  // }

  // componentDidUpdate(){
  //   validateInput()
  //   fetchCart()
  // }

  // componentWillUnmount(){

  // }


  render() {

    return <>
      {/* <MyForm submitFunction={this.callbackFunction} type="props" movieList={["Eagle", "Hanuman"]}/> */}
      {/* <h2>Hi, I am a Car!</h2> */}
      <HomePage />
    </>
  }
}

export default App;
