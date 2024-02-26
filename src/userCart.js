import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CartItem } from './userCartItem'

export const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // const fetchCart = setInterval(() => {
      axios.get('https://dummyjson.com/carts/user/97')
      .then((res) => {
        console.log(res?.data?.carts[0])
        setCartItems(res?.data?.carts[0])
      })
    // }, 5000)

    // return () => clearInterval(fetchCart)

  }, [])

  const updateCart = (id, quantity) => {
    const updateCartPayload = JSON.stringify({
      merge: true, // this will include existing products in the cart
      products: [
        {
          id,
          quantity,
        },
      ]
    })
    axios.put('https://dummyjson.com/carts/1', updateCartPayload).then((res) => {
      console.log(res.data, res.status);
    })
  }

  return (
    <>
      {cartItems?.products?.map((props) => {
        const properties = {
          ...props,
          updateCart
        }
        return <CartItem {...properties} key={props.id}/>
      })}
    </>
  )

  // add quantity // update cart
  // reduce quantity // update cart
  // delete from cart // update cart
  // proceed to checkout // checkout + delete cart
}