import React from 'react'
import '../styles/Card.css'

const Card = ({ title }) => {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
    </article>
  )
}

export default Card
