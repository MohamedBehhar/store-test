import React from 'react'

export const getStaticProps = async() => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();

  return {
    props : {products: data}
  }
}

const AllProducts = ({products}) => {
  return (
	<div>
    <h1>All Product</h1>
    {products.map((product) => {
        const {image, id , title, category, price, rating} = product
        return (
          <div key={id}>
            <img src={image} alt="" 
            className="h-40 "/>
            <p className='text-sm  text-gray-500 underline-none' >{title}</p>
          </div>
        )
      })}
  </div>
  )
}

export default AllProducts