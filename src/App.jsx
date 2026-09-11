import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [addedCard, setaddedCart] = useState([])

  const addtoCart = (prod) => {
    setaddedCart([...addedCard, { ...prod }])
  }

  const removefromCart = (prod) => {
    setaddedCart(addedCard.filter((item) => item.id !== prod.id))
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home
        addedCard={addedCard}
        setaddedCart={setaddedCart}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
      />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
