import React from 'react'

export default function ({rollCount, scores, name, setName, setScores}) {

  // const testScores = [
  //   {
  //     name: 'Jeff',
  //     score: 5
  //   },
  //   {
  //     name: 'Jessica',
  //     score: 4
  //   },
  //   {
  //     name: 'Jo',
  //     score: 6
  //   }
  // ]

  const [showForm, setShowForm] = React.useState(() => checkWins())

  function checkWins () {
    if (scores.length < 4) {
      return true
    } else {
      scores.every(record => {
        if (record.score < rollCount) {
          return false
        } else {
          return true
        }
      })
    }
  }

  const scoreElements = scores.map((score, index) => {
    return (
      <p key={index}>{score.name} - {score.score} rolls</p>
    )
  })

  function handleChange(event) {
    setName(event.target.value)
    console.log(name)
  }

  function handleSubmit() {
    setScores(prev => {
      if (prev.length === 3) {
        prev.sort((a, b) => a.score > b.score ? 1 : -1)
        prev.pop()
      }
      return [
        ...prev,
        {name: name, score: rollCount}
      ]
    }
    )
    setShowForm(prev => !prev)
    console.log(scores)
  }

  return (
    <div className='scores'>
      {showForm ? 
       <div className='form'>
       <h2>Congratulations! You got a high score!</h2>
        <input 
        type='text' 
        placeholder="type your name" 
        id='nameInput'
        onChange={handleChange}>
        </input>
        <button onClick={handleSubmit} className='submit'>submit</button>
      </div> :
      <div>
      <h2>High Scores</h2>
      {scoreElements} 
      </div> }
    </div>
  )
}