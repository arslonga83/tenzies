
import './App.css'
import Die from './Components/Die'

function App() {

  function allNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
  }
  
  console.log(allNewDice());

  return (
    <main>
      <div className='container'>
        <Die value={6} />
        <Die value={3} />
        <Die value={2} />
        <Die value={1} />
        <Die value={5} />
        <Die value={3} />
        <Die value={1} />
        <Die value={4} />
        <Die value={6} />
        <Die value={4} />
      </div>
    </main>
  )
}

export default App
