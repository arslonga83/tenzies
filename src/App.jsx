
import './App.css'
import React from 'react'
import Die from './Components/Die'
import { nanoid } from 'nanoid'

function App() {

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
  
  const [dice, setDice] = React.useState(() => allNewDice())

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
  
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
        {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
