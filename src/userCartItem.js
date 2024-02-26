import React from 'react'

export const CartItem = (props) => {
  console.log(props);
  return (
    <div style={{width: "550px", height: "120px", border:"solid 1px Black"}}>
      <div><img src={props.thumbnail} height={"25px"} alt=''/></div>
      <span> {props.title} </span><br />
      price: {props.price} <br />
      quantity: {props.quantity} <button onClick={() => props.updateCart(props.id, props.quantity+1)}> + </button>
      <button onClick={() => props.updateCart(props.id, 0)}> Delete </button>
      <button onClick={() => props.updateCart(props.id, props.quantity-1)}> - </button>
    </div>
  )
}