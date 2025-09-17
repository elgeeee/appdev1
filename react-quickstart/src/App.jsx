import './App.css'
import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)

    alert('Oops, You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      {count === 0 
        ? "Click me now!" 
        : count === 1
        ? "Oh, you clicked me once!"
        : `Woah, you just clicked me ${count} times!`}
    </button>
  );
}


function App() {
  return (
  <>
    <MyButton />
  </>
  )
}

export default App