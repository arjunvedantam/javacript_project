import React from "react";

export function Card(props){

  return (
    <div style={{border: "solid 2px black", maxHeight: '500px', maxWidth: "500px"}}>
      <div>
        <img alt="product" height="150px" src={ props.images[0] } id="productCardImage"/>
      </div>
      <div>
        <h3> { props.title } </h3>
      </div>
      <div>
        <p> { props.description } </p>
        <span> { props.price } </span>
        <span> { props.rating } </span>
      </div>
    </div>
  )
}