import React, { useContext, useState } from "react";
import MyContext from "./MyContext";

function Card({ prod, id }) {
  const {prodTotal,setprodTotal,settotalAmnt,totalAmnt,addedCart,addtoCart, removefromCart,totalQnty,settotalQnty } = useContext(MyContext);
	const isInCart = addedCart.some((item) => item.id === prod.id);
    
	const handleClick = () => {
    if (isInCart) {
      removefromCart(prod.id);
			settotalAmnt(totalAmnt-prodTotal);
			settotalQnty(totalQnty-1);

    } 
		else {
      addtoCart(prod);
			settotalAmnt(totalAmnt+prod.price);
			settotalQnty(totalQnty+1);
    }

  };

  return (
    <div className="prod-card">
      <img src={prod.image} alt="prod-img" />
      <h4>{prod.title}</h4>
      <h4>Price:{prod.price}</h4>
      <button type="button" onClick={handleClick}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Card;
