export default function Die({ value, isHeld, id, holdDice, tenzies }) {
  
  const styles = {
    backgroundColor: isHeld === true ? '#59E391' : '#FFFFFF'
  }

  return (
    <div 
      className='die' 
      style={styles} 
      onClick={() => tenzies ? '' : holdDice(id)}
      >
        <h1>{value}</h1>
    </div>
  )
}