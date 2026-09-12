import React, { useContext, useState } from 'react'
import MyContext from './MyContext';

function CardForCart({prod}) {
	const [prodTotal,setprodTotal]=useState(prod.price);
	const [selectedValue,setSelectedValue]=useState(1);
	const { totalAmnt,settotalAmnt,settotalQnty,totalQnty} = useContext(MyContext);

	
	const HandleChange=(e)=>{
		const qty=Number(e.target.value);
		setSelectedValue(qty);
		const newTotal=prod.price*qty;
		setprodTotal(newTotal);
		settotalAmnt(totalAmnt - prodTotal + newTotal); 
  	settotalQnty(totalQnty - selectedValue + qty); 
	};

	return (

		<>
			<div className='cardfor-cart'>
				<div className='cart-img'>
					<img src={prod.image} alt='prod-img'></img>
				</div>
				<div className='cartCard-details'>
					<div className='cart-data'>
						<p>{prod.title}</p>
						<p>{prod.price}</p>
					</div>
					<p>In Stock</p>
					<div className='cart-data'>
						{ selectedValue===10 ? (
							<label>
								Enter quantity:
								<input type='number' 
								value={selectedValue}
								onChange={HandleChange}/>
							</label>
						):
						(
							<select value={selectedValue}
						onChange={HandleChange}>
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
						)
						}
						
					</div>
					<div className='cart-data'>
						<p>Total</p>
						<p>{prodTotal}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardForCart