import React from 'react'
import Link from 'next/link';

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
    <div className='sm:bg-red-200 sm:grid grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
          const {image, id , title, category, description, price, rating} = product
          return (
            <Link href={'/products/' + id} key={id}>
              <div className="my-2 p-2 shadow-md text-left bg-white rounded-md w-5/6 mx-auto text-gray-700 cursor-pointer" 
              onClick={() => console.log(id)}>
                <img src={image} alt="" 
                className="h-40 my-1 mx-auto"/>
                <h1 className='font-poppins' >{title}</h1>
                <article className='text-xs'>
                  <p className='text-gray-500'>{description.substr(0, 70)}...</p>
                  <p >Category: <span className='text-red-400'>{category}</span></p>
                  <p >Price: <span className='text-red-400 font-semibold text-l'>{price}$</span></p>
                </article>
              </div>
            </Link>
          )
        })}
    </div>
  </div>
  )
}

export default AllProducts