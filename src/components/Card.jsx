import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slice/productSlice";

function Card({ prod, id }) {
  const dispatch = useDispatch();
  const addedCart = useSelector((state) => state.product.addedCart);
  const isInCart = addedCart.some((item) => item.id === prod.id);

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(prod.id));
    } else {
      dispatch(addToCart(prod));
    }
  };

  return (
    <div className="prod-card">
      <img src={prod.image} alt="prod-img" />
      <div className="prod-details">
        <p>{prod.title}</p>
        <p>Price:{prod.price}</p>
        <button type="button" onClick={handleClick}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

    </div>
  );
}

export default Card;
