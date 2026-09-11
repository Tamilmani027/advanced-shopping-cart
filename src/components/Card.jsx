import React, { useState } from 'react'

function Card({ prod, key }) {
	const [toCart, setToCart] = useState(false)
	return (
		<>
			<div className='prod-card'>
				<img src={prod.image} alt='prod-img' key={key}></img>
				<p>{prod.title}</p>
				<p>{prod.price}</p>
				<p>{prod.rating.rate}</p>
				<button type='button' onClick={() => setToCart(!toCart)}>{toCart ? 'Remove from Cart' : 'Add to Cart'}</button>
			</div>
		</>
	)
}

export default Card