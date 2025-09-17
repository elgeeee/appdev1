import './App.css'
import { useState } from 'react'

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Banana', isFruit: true, id: 2 },
  { title: 'Mango', isFruit: true, id: 3 },
];

function App() {
  const listItems = products.map(product =>
  <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'white'
    }}
  >
    {product.title}
  </li>
);

  return (
    <ul>{listItems}</ul>
  )
}

export default App