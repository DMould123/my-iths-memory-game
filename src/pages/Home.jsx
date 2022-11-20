/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from '../components/Card/Card'

const cardImages = [
  {'src': 'https://avatars.githubusercontent.com/u/83030807?v=4', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/97664991?v=4', correct: false},
  {'src': 'https://media-exp1.licdn.com/dms/image/C4E03AQGYQMDthfXzVg/profile-displayphoto-shrink_800_800/0/1655789576556?e=1674691200&v=beta&t=AHGeVmg69RHN27hILSJzFmwu4qv7HHbSq0nrwQKRV8k', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/95115610?v=4', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/97674509?v=4', correct: false},
  {'src': 'https://media-exp1.licdn.com/dms/image/C4E03AQFhFKPvCSpOdA/profile-displayphoto-shrink_800_800/0/1646654872537?e=1674691200&v=beta&t=5OBVrWM8QHdMRN8bsUXPqHiXtHu10EhGT47lpPGzFlU', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/90246884?v=4', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/90243396?v=4', correct: false},
  {'src': 'https://media-exp1.licdn.com/dms/image/C4D03AQFhH99HIDKpEw/profile-displayphoto-shrink_800_800/0/1651941071138?e=1674691200&v=beta&t=ZcuusXhfGp2WX_1q_EE0_AZNAoABRAaLG1LMO41rKKg', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/97674585?v=4', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/98945101?v=4', correct: false},
  {'src': 'https://avatars.githubusercontent.com/u/77876755?v=4', correct: false},
]


const Home = () => {
const [cards, setCards] = useState ([])
const [attempts, setAttempts]  = useState (0)
const [optionOne, setOptionOne] = useState (null)
const [optionTwo, setOptionTwo]= useState (null)


//shuffle cards
const shuffleCards = () => {
 const shuffledCards = [...cardImages, ...cardImages]
  .sort(()=> Math.random() - 0.5)
  .map((card) => ({ ...card, id: Math.random() }))

  setCards(shuffledCards)
  setAttempts(0)
}

const chooseOption = (card) => {
  optionOne ? setOptionTwo(card) : setOptionOne(card)
  // if optionOne is null then setOptionOne operates, if optionOne has a value it will operate setOptiontTwo
}

//evaluating both card options
useEffect (() => {
if(optionOne && optionTwo) {
if(optionOne.src === optionTwo.src) {
 setCards(prevCards => {
  return prevCards.map(card => {
    if (card.src === optionOne.src) {
      return{ ...card, correct: true}
    } else   {
      return card
    }
  })
 })
  resetAttempt()
} else {
  resetAttempt()
}
}
}, [optionOne, optionTwo])


const resetAttempt = () => {
setOptionOne (null)
setOptionTwo (null)
setAttempts(prevAttempts => prevAttempts + 1)
}

  return (
    <div id='home'>
     <h1>ITHS Memory Game</h1>
     <button onClick={shuffleCards}>New Game</button>

<div className="card-layout">
{cards.map(card => (
 <Card key={card.id}
 card={card}
 chooseOption={chooseOption}
 />
)

)}
</div>
</div>
  )
}

export default Home
