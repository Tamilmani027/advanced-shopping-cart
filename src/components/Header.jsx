import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
	const navigate = useNavigate()
	const cartTotal = useSelector((state) => state.product.cartTotal);
	return (
		<>
			<div className='header-main'>
				<h1>Logo</h1>
				<div className='header-nav'>
					<h4>Home</h4>
					<h4>About</h4>
					<h4>Shop</h4>
				</div>
				<div className='header-cartbtn'>
					<button type='button' onClick={() => navigate('/cart')}><h4>Cart</h4><span>{cartTotal}</span></button>
				</div>
			</div>
		</>
	)
}

export default Header
