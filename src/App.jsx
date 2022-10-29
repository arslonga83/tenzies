
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

  const diceElements = dice.map((die, index) => {
    return <Die 
              value={die.value} 
              key={die.id} 
              isHeld={die.isHeld} 
              />
  })

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main>
      <div className='container'>
      {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
