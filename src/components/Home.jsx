import React from 'react'
import Header from './Header'
import Card from './Card'
import ProductContainer from './ProductContainer'
import Cart from './Cart'
import CardForCart from './CardForCart'

function Home() {
	return (
		<div>
			<Header/>
			<div className='banner-sec'>
					<p>Banner</p>
			</div>
			<ProductContainer/>
			<Cart/>
			<CardForCart/>
		</div>
	)
}

export default Home
