
import './App.css'
import React from 'react'
import Die from './Components/Die'

function App() {

  function allNewDice() {
    console.log('allNewDice');
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
