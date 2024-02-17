import React, { useEffect, useState } from "react";
import { Card } from "./productCard";
import axios from 'axios';
import { ProductPage } from "./productPage";

export function HomePage(props){
  const [productsList, setProductsList] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(0);

  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=10')
    .then((response) => {
      console.log(response)
      setProductsList(response.data.products)
    })
    .catch((error) => {
      console.log(error)
      setProductsList([])
    })
  },[])

  useEffect(()=>{
    if (selectedProductId !== 0) {
      axios.get(`https://dummyjson.com/products/${selectedProductId}`)
      .then((res) => {
        console.log(res);
        setSelectedProduct(res.data);
      })
    }
  }, [selectedProductId])

  return (
    <>
      <div>
        <center>
          <h1>{"Home Needs Supermarket "}</h1>
          <h3> {"One stop shop for all your needs"} </h3>
        </center>
      </div>

      <div>
        <h2> HomePage </h2>
        {selectedProductId}
        <h2>Products for sale </h2>
        {productsList.map((productObject) => {
          return <Card
            {...productObject}
            key={productObject.id}
            onClickProduct = {setSelectedProductId}
          />
        })}
        {/* {selectedProduct && <ProductPage {...selectedProduct}/>} */}
      </div>

    </>
  )
}