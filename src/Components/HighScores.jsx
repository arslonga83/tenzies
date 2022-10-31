export default function () {

  const scores = [
    {
      name: 'Jeff',
      score: 4
    },
    {
      name: 'Jessica', 
      score: 7
    },
    {
      name: 'Jo',
      score: 9
    }
  ]

  const scoreElements = scores.map(score => {
    return (
      <p>{score.name} - {score.score}</p>
    )
  })

  return (
    <div className='scores'>
      <h2>High Scores</h2>
   
      {scoreElements}
    </div>
  )
}