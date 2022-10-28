export default function Die({ value, isHeld }) {
  const styles = {
    backgroundColor: isHeld === true ? '#59E391' : '#FFFFFF'
  }

  return (
    <div className='die' style={styles}>
        <h1>{value}</h1>
    </div>
  )
}