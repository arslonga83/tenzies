import React from 'react'

export default function (props) {

  const [scores, setScores] = React.useState([])

  const [name, setName] = React.useState('')

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

  const scoreElements = scores.map(score => {
    return (
      <p>{score.name} - {score.score} rolls</p>
    )
  })

  function handleChange(event) {
    setName(event.target.value)
    console.log(name)
  }

  function handleSubmit() {
    setScores(prev => {
      return [
        ...prev,
        {name: name, score: props.rollCount}
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