import React from "react";


export const ProductPage = (props) => {
  console.log(props)
  return (
    <>
      Product Page
      <div className="row">
        <div>
          <img height={"500px"} src={props?.images[0]}/>
        </div>
        <div>
          <div><h3>{props.title}</h3></div>
          <div>MRP: {props.price}/-</div>
          <div>Rating: {props.rating} stars</div>
          <div>Discount: {props.discountPercentage} stars</div>
          <div>{props.description}</div>
        </div>
      </div>
    </>
  )
};