import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../Components/Products.css'
import  { remove } from '../store/CartSlice'
export default function Cart() {
  const dispatch =useDispatch();
  const products =useSelector(state => state.cart)
  const handleRemove =(productid)=>{
dispatch( remove(productid));
  }
  return (
    <div className='products'>
      
       
      {products.map(product =>(
        <div className='card' key={product.id}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h6>{product.price}</h6>
        <button  onClick={()=> handleRemove(product.id)} className='btn'>remove</button>
        </div>
        ))}
 
    </div>
  )
}
