import React, { useState } from 'react'
import jon from '../images/jon.png'

const studentImages = [
  {'src': '../images/adam.png'},
  {'src': '../..images/björn.png'},
  {'src': '../..images/calle.png'},
  {'src': '../..images/david.png'},
  {'src': '../..images/emelie.png'},
  {'src': '../..images/erika.png'},
  {'src': '../..images/fred.png'},
  {'src': '../..images/gustav.png'},
  {'src': '../..images/jon.png'},
  {'src': '../..images/ludwig.png'},
  {'src': '../..images/mahdi.png'},
  {'src': '../../images/pernilla.png'},
]


const Home = () => {
const [tiles, setTiles] = useState([])
const [attempts, setAttempts] = useState(0)


//shuffle tiles
const randomiseTiles = () => {
 const randomisedTiles = [...studentImages, ...studentImages]
  .sort(() => Math.random() -0.5)
  .map((tile) => ({...tile, id: Math.random() }))

  setTiles(randomisedTiles)
  setAttempts(0)
}

console.log(tiles, attempts)

  return (
    <div id='home'>
     <h1>ITHS Memory Game</h1>
     <button onClick={randomiseTiles}>New Game</button>

<div className="card-layout">
{tiles.map(tile => (
  <div className='tile' key={tile.src}>
    <div>
    <img className='front ' src={tile.src} alt="tile-front" />
      <img className='back' src={jon} alt='tile-back' />
    </div>
  </div>
)

)}
     </div>
    </div>
  )
}

export default Home
