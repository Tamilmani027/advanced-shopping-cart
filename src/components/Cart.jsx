import React from 'react'
import CardForCart from './CardForCart'

function Cart() {
	return (
		<>
			<CardForCart />
			<footer>
				<div className='bill-details'>
					<div className='cart-bill'>
						<p>SUBTOTAL:</p>
						<p>sub total</p>
					</div>
					<div className='cart-bill'>
						<p>TOTAL QUANTITY:</p>
						<p>total quantity</p>
					</div>
					<div className='cart-bill'>
						<p>SHIPPING:</p>
						<p>shipping</p>
					</div>
					<div className='cart-bill'>
						<p>TOTAL:</p>
						<p>total</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Cart
