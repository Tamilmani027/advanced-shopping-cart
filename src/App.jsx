import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyContext from './components/MyContext';

function App() {
  const [toCart, setToCart] = useState(false);
  const [addedCart, setaddedCart] = useState([]);
  const [cartTotal, setcartTotal]=useState(0);
  const [totalAmnt,settotalAmnt]=useState(0);
  const [totalQnty,settotalQnty]=useState(0);

  const addtoCart = (prod) => {
    setaddedCart([...addedCart, { ...prod }])
    setcartTotal(cartTotal+1);
  }

  const removefromCart = (id) => {
    setaddedCart(addedCart.filter((item) => item.id !== id))
    setcartTotal(cartTotal-1);

  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home
      />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ])

  return (
    <>
      <MyContext.Provider value={{totalAmnt,settotalAmnt,toCart, setToCart, addedCart, setaddedCart, addtoCart, removefromCart,cartTotal,totalQnty,settotalQnty}}>
              <RouterProvider router={router} />
      </MyContext.Provider>
      
    </>
  )
}

export default App
