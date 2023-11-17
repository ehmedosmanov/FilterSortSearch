import React from 'react'
import './index.css'

const Product = ({id,name,unitPrice}) => {
  return (
    <>
        <div className='product'>
            <h4>{name}</h4>
            <span>{unitPrice}</span>
        </div>
    </>
  )
}

export default Product