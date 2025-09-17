import './App.css'
import { useState } from 'react'

function AdminPanel(){
  return (
    <h1>Admin Panel</h1>
  )
}

function LoginForm(){
  return (
    <h1>Login Form</h1>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  let content;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  
  return (
    <div>
    {content}
    
    {isLoggedIn ? (
      <AdminPanel />
    ) : (
      <LoginForm />
    )}
    </div>
  )
}

export default App