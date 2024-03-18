import React from 'react'

function Card({data}) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.price}</p>
    </div>
  )
}

export default Card
