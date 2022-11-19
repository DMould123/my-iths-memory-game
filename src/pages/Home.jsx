/* eslint-disable no-undef */
import React, { useState } from 'react'

const studentImages = [
  {'src': '../../assets/images/adam.png'},
  {'src': '../../assets/images/björn.png'},
  {'src': '../../assets/images/calle.png'},
  {'src': '../../assets/images/david.png'},
  {'src': '../../assets/images/emelie.png'},
  {'src': '../../assets/images/erika.png'},
  {'src': '../../assets/images/fred.png'},
  {'src': '../../assets/images/gustav.png'},
  {'src': '../../assets/images/jon.png'},
  {'src': '../../assets/images/ludwig.png'},
  {'src': '../../assets/images/mahdi.png'},
  {'src': '../../assets/images/pernilla.png'}
]


const Home = () => {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)


//shuffle cards
const randomiseCards = () => {
 const randomisedCards = [...studentImages, ...studentImages]
  .sort(() => Math.random() -0.5)
  .map((card) => ({...card, id: Math.random() }))

  setCards(randomisedCards)
  setTurns(0)
}

console.log(cards, turns)

  return (
    <div id='home'>
     <h1>ITHS Memory Game</h1>
     <button onClick={randomiseCards}>New Game</button>
    </div>
  )
}

export default Home
