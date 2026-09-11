import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()
	return (
		<>
			<div className='header-main'>
				<h1>Logo</h1>
				<h3>Home</h3>
				<h3>About</h3>
				<h3>Shop</h3>
				<div className='header-cartbtn'>
					<button type='button' onClick={() => navigate('/cart')}>Cart</button>
				</div>
			</div>
		</>
	)
}

export default Header