import React from 'react'

export default function (props) {

  // const scores = [
  //   {
  //     name: 'Jeff',
  //     score: 4
  //   },
  //   {
  //     name: 'Jessica', 
  //     score: 7
  //   },
  //   {
  //     name: 'Jo',
  //     score: 9
  //   }
  // ]

  const [scores, setScores] = React.useState([{name:'jeff',score:4}])

  const [name, setName] = React.useState('')

  const scoreElements = scores.map(score => {
    return (
      <p>{score.name} - {score.score}</p>
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
    console.log(scores)
  }


  

  return (
    <div className='scores'>
      <h2>Congratulations! You got a high score!</h2>
      <input 
        type='text' 
        placeholder="type your name" 
        id='nameInput'
        onChange={handleChange}>
        </input>
        <button onClick={handleSubmit}>submit</button>
      <h2>High Scores</h2>
      {scoreElements}
    </div>
  )
}