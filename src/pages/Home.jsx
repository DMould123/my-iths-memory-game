/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

const cardImages = [
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780564/memory-game-pictures/p102057_nc3ykk.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780530/memory-game-pictures/p159533_rvesmf.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780489/memory-game-pictures/p171317_r0u0kn.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780784/memory-game-pictures/p184754_qsmzpb.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780457/memory-game-pictures/p149065_u4n4vr.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680780900/memory-game-pictures/p214048_r8xgrs.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781060/memory-game-pictures/p430871_cekgwj.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781095/memory-game-pictures/p151086_iuqipk.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781294/memory-game-pictures/p200402_dphw4z.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781315/memory-game-pictures/p465351_smbk6q.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781347/memory-game-pictures/p247632_wbup3o.png',
    correct: false
  },
  {
    src: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1680781365/memory-game-pictures/p200600_vtiksr.png',
    correct: false
  }
]

const Home = () => {
  const [cards, setCards] = useState([])
  const [attempts, setAttempts] = useState(0)
  const [optionOne, setOptionOne] = useState(null)
  const [optionTwo, setOptionTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setOptionOne(null)
    setOptionTwo(null)
    setCards(shuffledCards)
    setAttempts(0)
  }

  const chooseOption = (card) => {
    optionOne && optionOne !== card ? setOptionTwo(card) : setOptionOne(card)
    // if optionOne is null then setOptionOne operates, if optionOne has a value it will operate setOptiontTwo
  }

  //evaluating both card options
  useEffect(() => {
    if (optionOne && optionTwo) {
      setDisabled(true)
      if (optionOne.src === optionTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === optionOne.src) {
              return { ...card, correct: true }
            } else {
              return card
            }
          })
        })
        resetAttempt()
      } else {
        setTimeout(() => resetAttempt(), 1000)
      }
    }
  }, [optionOne, optionTwo])

  const resetAttempt = () => {
    setOptionOne(null)
    setOptionTwo(null)
    setAttempts((prevAttempts) => prevAttempts + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="Home">
      <h1>Wolves FC Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-layout">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            chooseOption={chooseOption}
            turned={card === optionOne || card === optionTwo || card.correct}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Attempts: {attempts}</p>
    </div>
  )
}

export default Home
