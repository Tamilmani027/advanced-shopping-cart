import React from 'react'

function CardForCart() {
	return (
		<>
			<div className='cardfor-cart'>
				<div className='cart-img'>
					<img src='https://picsum.photos/250' alt='prod-img'></img>
				</div>
				<div className='cartCard-details'>
					<div className='cart-data'>
						<p>Prod Title</p>
						<p>prod price</p>
					</div>
					<p>In Stock</p>
					<div className='cart-data'>
						<select>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
					</div>
					<div className='cart-data'>
						<p>Total</p>
						<p>10</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardForCart