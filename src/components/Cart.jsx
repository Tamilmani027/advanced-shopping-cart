import React from 'react'
import CardForCart from './CardForCart'
import { useSelector } from 'react-redux';

function Cart() {
	const totalAmnt = useSelector((state) => state.product.totalAmnt);
	const addedCart = useSelector((state) => state.product.addedCart);
	const totalQnty = useSelector((state) => state.product.totalQnty);


	return (
		<>
			<div>
				{
					addedCart.map((prod) => (
						<CardForCart prod={prod} key={prod.id} />
					))
				}
			</div>
			<footer>
				<div className='bill-details'>
					<div className='cart-bill'>
						<p>SUBTOTAL:</p>
						<p>{totalAmnt}</p>
					</div>
					<div className='cart-bill'>
						<p>TOTAL QUANTITY:</p>
						<p>{totalQnty}</p>
					</div>
					<div className='cart-bill'>
						<p>SHIPPING:</p>
						<p>shipping</p>
					</div>
					<div className='cart-bill'>
						<p>TOTAL:</p>
						<p>{totalAmnt}</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Cart
