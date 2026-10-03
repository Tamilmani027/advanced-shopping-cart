import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../slice/productSlice';

function CardForCart({ prod }) {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(prod.qty || 1);
  const [customMode, setCustomMode] = useState(false);
  const prodTotal = prod.price * selectedValue;

  const HandleChange = (e) => {
    const qty = Number(e.target.value);
    setSelectedValue(qty);
    dispatch(updateQuantity({ id: prod.id, qty }));
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
            {customMode ? (
              <label>
                Enter quantity:
                <input
                  type='number'
                  value={selectedValue}
                  onChange={HandleChange}
                />
              </label>
            ) : (
              <select
                value={selectedValue}
                onChange={(e) => {
                  const qty = Number(e.target.value);
                  if (qty === 10) {
                    setCustomMode(true);
                  } else {
                    HandleChange(e);
                  }
                }}
              >
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
            )}
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

export default CardForCart;
