import React from 'react'
import Cart from './cart'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const { value } = useSelector((state) => state.LoggedInReducer)


  return (
    <div>
      <h1>{value.toString()}</h1>
      {
        value?<><h1>Uer id logged  in</h1></>:<><h1>user is logged out</h1></>
      }
      <Cart />
    </div>
  )
}

export default App
