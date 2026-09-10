import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
    <Home
    total={total}
    setTotal={setTotal}/>
    </>
  )
}

export default App
