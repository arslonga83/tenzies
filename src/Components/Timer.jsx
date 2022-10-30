import { intervalToDuration } from 'date-fns'


export default function Timer() {
  // // NEW TIMER FUNCTION IN PROGRESS

  const start = new Date()

  function timer() {
    let duration = intervalToDuration({
      start: start, 
      end: new Date(),
   })
    return duration.seconds
  }

  setInterval(timer, 1000)

  


  return (
  <h4>{timer()}</h4>
  )
}