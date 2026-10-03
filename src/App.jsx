import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
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
