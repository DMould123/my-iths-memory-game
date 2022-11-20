import React from 'react'
import './Card.css'
import back from '../../images/ithslogo.png'

const Card = ({card, chooseOption}) => {
const handleClick = () => {
  chooseOption(card)
}
  return (
    <div className='card'>
    <div>
    <img className='front ' src={card.src} alt="card-front" />
      <img className='back'
      src={back}
      onClick={handleClick}
      alt='card-back' />
    </div>
    </div>
  )
}

export default Card
