import React   from 'react'
import { useSelector } from 'react-redux'
export default function TotalPrice() {
    const shirts =useSelector((state)=> state.cart);
  return (
    <div>
      <h1>Totel Price in Add To Card:{shirts.length}</h1>
      
    </div>
  )
}
