import './App.css'
import { useState } from 'react'

function MyButton() {
  function handleClick() {
    alert('Oops, You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me now!
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