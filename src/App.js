import React from 'react';
import './App.css';
// import { MyForm, Mybutton, Mytable } from './inputForm';
import { HomePage } from './homePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductPage } from './productPage';
import { Cart } from './userCart';

  function App(){

    return (<>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/productPage/:productId' Component={<ProductPage />} />
          <Route path='*' Component={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage />

      <Cart />
    </>)
  }

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


  // render() {


  // }
// }

export default App;
