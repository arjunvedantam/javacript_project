import React from 'react';
import './App.css';
import { MyForm, Mybutton, Mytable } from './inputForm';
class App extends React.Component {


  callbackFunction(name) {

    console.log(name)
    // this.setState("blockSection", name)
  }


  render() {
    return <>
      <MyForm submitFunction={this.callbackFunction} type="props" movieList={["Eagle", "Hanuman"]}/>
      <h2>Hi, I am a Car!</h2>
    </>
  }
}

export default App;
