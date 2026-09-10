import React from 'react'

function Card({prod,key}) {
	return (
		<>
		<div className='prod-card'>
			<p>{prod.title}</p>
			<p>{prod.price}</p>
			<p>{prod.rating.rate}</p>
			<button>Add to Cart</button>
		</div>
		</>
	)
}

export default Card