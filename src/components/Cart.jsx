import React from 'react'
import CardForCart from './CardForCart'
import { useContext } from 'react';
import MyContext from './MyContext';

function Cart() {
	  const { totalAmnt, addedCart,totalQnty} = useContext(MyContext);

	return (
		<>
		<div>
					{
			addedCart.map((prod)=>(
				<CardForCart prod={prod} key={prod.id}/>
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
