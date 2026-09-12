import React, { useContext } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from './MyContext'

function Header() {
	const navigate = useNavigate()
	const {cartTotal}=useContext(MyContext);
	return (
		<>
			<div className='header-main'>
				<h1>Logo</h1>
				<h3>Home</h3>
				<h3>About</h3>
				<h3>Shop</h3>
				<div className='header-cartbtn'>
					<button type='button' onClick={() => navigate('/cart')}><h4>Cart</h4><span>{cartTotal}</span></button>
				</div>
			</div>
		</>
	)
}

export default Header