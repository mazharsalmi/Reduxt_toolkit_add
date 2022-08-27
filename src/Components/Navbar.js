import './Navbar.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
function Navbar() {
const items =useSelector((state)=> state.cart);
const [count, setCount] = useState(items.length);
const id= 20;
  useEffect(() => {
    if (count<id) {
      setCount(count+1);
    }
  });


  return (
    <div className='nav'>
      <div className='left_side'>
        <h1>Test For Reduxt</h1>
       <h1>no of products:{count}</h1>
      </div>
      <div className='right_side'>
      <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <Link className='navlink' to='/add'>Total add</Link>
        <h1>Cart items:{items.length}</h1>
      </div>
    </div>
  )
}

export default Navbar
