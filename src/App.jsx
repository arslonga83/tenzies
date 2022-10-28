
import './App.css'
import React from 'react'
import Die from './Components/Die'

function App() {

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }
  
  const [dice, setDice] = React.useState(() => allNewDice())

  const diceElements = dice.map((num, index) => {
    return <Die value={num} key={index}/>
  })

  console.log(dice)

  return (
    <main>
      <div className='container'>
      {diceElements}
      </div>
      <button>Roll</button>
    </main>
  )
}

export default App
