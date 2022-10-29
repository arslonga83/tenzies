export default function Die({ value, isHeld, holdDice }) {
  
  const styles = {
    backgroundColor: isHeld === true ? '#59E391' : '#FFFFFF'
  }

  return (
    <div className='die' style={styles} onClick={holdDice}>
        <h1>{value}</h1>
    </div>
  )
}