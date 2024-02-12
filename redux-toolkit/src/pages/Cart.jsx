import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../cartSlice'
function Cart() {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.cartBtn)
  return (
    <div>
        {data?.value.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={
            ()=>{
                dispatch(removeFromCart(product.id))
            }
          }>remove from cart</button>
        </div>
      ))}
    </div>
  )
}

export default Cart