import React from 'react'

export const CartItem = (props) => {
  console.log(props);
  return (
    <div style={{width: "550px", height: "120px", border:"solid 1px Black"}}>
      <div><img src={props.thumbnail} height={"25px"} alt=''/></div>
      <span> {props.title} </span><br />
      price: {props.price} <br />
      quantity: {props.quantity} <button> + </button>
      <button> Delete </button>
      <button> - </button>
    </div>
  )
}