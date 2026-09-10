import React from 'react'
import products from '../data/productsData.json';
import Card from './Card';

function ProductContainer() {
	const productsdata=products;
	return (
		<>
		<div className='prod-container'>
					{
			productsdata.products.map((prod,index)=>(
				<Card prod={prod} key={index}/>
			))
			}
		</div>
		
		</>
	)
}

export default ProductContainer