import React, { useEffect, useState } from "react";
import { Card } from "./productCard";
import axios from 'axios';

export function HomePage(props){
  const [productsList, setProductsList] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((response) => {
      console.log(response)
      setProductsList(response.data.products)
    })
    .catch((error) => {
      console.log(error)
      setProductsList([])
    })
  },[])

  return (
    <>
      <div>
        <center>
          <h1>{"Home Needs Supermarket"}</h1>
          <h3> {"One stop shop for all your needs"} </h3>
        </center>
      </div>

      <div>
        <h2>{"Products for sale"} </h2>
        {productsList.map((productObject, i) => {
          return <Card
            {...productObject}
            key={i}
          />
        })}
      </div>

    </>
  )
}