//IDEAS TO ADD
//track number of rolls
//optional pips instead of numbers on dice
//track time...maybe live timer on screen?
//save best time and/or rolls in local storage...with name?

import './App.css'
import React from 'react'
import Timer from './Components/Timer'
import Die from './Components/Die'
import HighScores from './Components/HighScores'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {

  const [dice, setDice] = React.useState(() => allNewDice())

  const [tenzies, setTenzies] = React.useState(true)

  const [rollCount, setRollCount] = React.useState(0)

  React.useEffect(() => {
    const win = dice.every(obj => {
      if(obj.isHeld === true && obj.value === dice[0].value) {
        return true
      }
    })
    if (win) {
      setTenzies(true)
    } 
  }, [dice])

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false,
        id: nanoid()
      }) 
    }
    return newDice
  }
  
  const diceElements = dice.map((die) => {
    return <Die 
              value={die.value} 
              id={die.id}
              key={die.id} 
              isHeld={die.isHeld} 
              holdDice={holdDice}
              />
  })

  function rollDice() {
    setRollCount(prev => {
      return prev + 1
    })
    setDice(prevDice => {
      const newDice = [];
      prevDice.map(die => {
        if (die.isHeld === true) {
          newDice.push(die)
        } else {
          newDice.push({
            value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false,
            id: nanoid()
          }) 
        }
      })
      return newDice;
    })
  }

  function holdDice(id) {
    setDice(prevDice => {
      const newDice = [];
      prevDice.map(die => {
        if(die.id === id) {
          newDice.push({
            ...die,
            isHeld: !die.isHeld
          })
        } else {
          newDice.push(die)
        }  
    })
    return newDice
  })
}

  function newGame() {
    setDice(allNewDice)
    setTenzies(false)
  }
  

  
  return (
    <main>
      {tenzies ? <Confetti /> : ''}
      <h1 className="title">Tenzies</h1>
      {tenzies ? '' : <Timer />}
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
        {diceElements}
      </div>
      <button 
        onClick={tenzies ? newGame : rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
      </button>
      {tenzies ? <HighScores /> : <h4>{`You rolled ${rollCount} times`}</h4>}
      
    </main>
  )
}

export default App
