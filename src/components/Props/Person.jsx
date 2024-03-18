import React from 'react'
import "./Person.css"

function Person(props) {
    const {name, age, image, lastName} = props 
  return (
    <div>
      Person-
    {name}- {age}
    <img src={image} />
    {lastName}
    </div>
  )
}

export default Person
