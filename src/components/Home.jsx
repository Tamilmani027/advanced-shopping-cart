import React from 'react'
import Header from './Header'
import Card from './Card'
import ProductContainer from './ProductContainer'
import Cart from './Cart'
import CardForCart from './CardForCart'
import Banner from './Banner'

function Home() {
	return (
		<div>
			<Header />
			<Banner/>
			<ProductContainer />
		</div>
	)
}

export default Home
