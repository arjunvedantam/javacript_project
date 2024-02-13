import React, { useState, useEffect } from 'react'

export function MyForm ({submitFunction, type, movieList}) {
  let [name, setName] = useState("");
  // let name = ""
  let validateInput = (inputvalue) => inputvalue?.match(/^[A-Z].*$/)
  let fetchCart = () => {
    setName("Aryan")
    fetch("get", "http://ourApp.com/fetchCart")
  }
  const isValid = validateInput()

  useEffect(() => {
    validateInput()
    fetchCart()
    if(true) console.log("component Mounted")
    const unmountProceedings = () => {
    }
    return unmountProceedings
  }, [name])

  setName("Naveen")
  setName("Naveen")


  return (
    <>
      <form id='studentDetails' onSubmit={(event) => {
        event.preventDefault()
        submitFunction(name)
      }}>
        <label htmlFor='name'>
          Enter your name:
        </label>
        <input id='name' type="text"  onChange={(event) => {
          setName(event.target.value)
          // validateInput(event.target.value)
          // name = event.target.value
        }} />
        <button type='submit' disabled={isValid}>
          Submit
        </button>
      </form>
      <span>
        {name}
      </span>
      <div>
        {type}
      </div>
      <div>
        {movieList}
      </div>
    </>
  )
}

export const Mybutton = "Button"

export const Mytable = "Table"

// export default MyForm
