import React from 'react'
import './Card.css'
import back from '../../images/wolves.png'

const Card = ({card, chooseOption, turned, disabled}) => {
const handleClick = () => {
  if(!disabled) {
    chooseOption(card)
  }

}
  return (
    <div className='card'>
    <div className={turned  ? 'turned' : "" }>
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
