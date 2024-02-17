import React from 'react';
import './App.css';
// import { MyForm, Mybutton, Mytable } from './inputForm';
import { HomePage } from './homePage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductPage } from './productPage';
import { Cart } from './userCart';

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
      {/* <BrowserRouter>
        <Routes>
          <Route path='/productPage/:productId' Component={<ProductPage />} />
          <Route path='*' Component={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage />
      <Cart />
    </>
  }
}

export default App;
