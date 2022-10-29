export default function Die({ value, isHeld, id, holdDice }) {
  
  const styles = {
    backgroundColor: isHeld === true ? '#59E391' : '#FFFFFF'
  }

  return (
    <div className='die' style={styles} onClick={() => holdDice(id)}>
        <h1>{value}</h1>
    </div>
  )
}