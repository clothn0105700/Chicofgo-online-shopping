import React from 'react'
import styles from './Card.module.scss'

const Card = () => {
  const { card_contorl, card_body } = styles
  return (
    <div className={`${card_contorl}`}>
      <div className={`${card_body} card`}>123</div>
    </div>
  )
}

export default Card
