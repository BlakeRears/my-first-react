import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Class Components

const Card = ({ title }) => {
  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been linked: ${hasLiked}`);
  });

  return (
    <div className='card' onClick={() => setCount((prevState) => 
    prevState + 1)}>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
       {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Lion King"/>
      <Card title="Avatar"/>
    </div>
  )
}

export default App