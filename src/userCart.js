import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CartItem } from './userCartItem'

export const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/carts/user/1')
    .then((res) => {
      console.log(res?.data?.carts[0])
      setCartItems(res?.data?.carts[0])
    })
  }, [])

  return (
    <>
      {cartItems?.products?.map((props) => <CartItem {...props}/>)}
    </>
  )

  // add quantity // update cart
  // reduce quantity // update cart
  // delete from cart // update cart
  // proceed to checkout // checkout + delete cart
}