export default function Die({ value, isHeld }) {
  return (
    <div 
      className='die' 
      style={{backgroundColor: isHeld === true ? '#59E391' : '#FFFFFF'}}>
        <h1>{value}</h1>
    </div>
  )
}