import React from 'react'
import './Sidebar.css';
import Category from './Category/Category';
import Company from './Company/Company';
import Price from './Price/Price';  

function Sidebar({handleChange}) {
  console.log(handleChange);
  return (
    <>
    <section className='sidebar'>
       <div className='logo-container'>
        <h1>🛒</h1>
        <h1>Irish Dance Shop</h1>
    </div>
    <Category handleChange={handleChange} />
    <Price handleChange={handleChange} />
    <Company handleChange={handleChange} />
    </section>
    </>
  )
}
export default Sidebar;
