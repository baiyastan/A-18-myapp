import React from 'react'
import "./Person.css"

function Product({data}) {
  return (
    <div className={`product ${data.completed ? "green" : 'red'}`}>
      <img src={data.image} alt='image'/>
      <div className='info'>
        <h2>{data.name}</h2>
        <p>{data.price}</p>
        <p>{data.rating}</p>
        {data.completed && <div>{data.numReviews}</div>}
      </div>
    </div>
  )
}

export default Product
