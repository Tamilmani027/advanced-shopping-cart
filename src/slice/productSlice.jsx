import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: 'product',

	initialState: {
		toCart: false,
		addedCart: [],
		cartTotal: 0,
		totalAmnt: 0,
		totalQnty: 0
	},

	reducers: {
		setToCart: (state, action) => {
			state.toCart = action.payload;
		},

		addToCart: (state, action) => {
			const product = action.payload;
			state.addedCart.push({ ...product, qty: 1 });
			state.cartTotal += 1;
			state.totalAmnt += product.price;
			state.totalQnty += 1;
		},

		removeFromCart: (state, action) => {
			const id = action.payload;
			const item = state.addedCart.find((item) => item.id === id);
			if (item) {
				state.totalAmnt -= item.price * item.qty;
				state.totalQnty -= item.qty;
				state.addedCart = state.addedCart.filter((item) => item.id !== id);
				state.cartTotal -= 1;
			}
		},

		updateQuantity: (state, action) => {
			const { id, qty } = action.payload;
			const item = state.addedCart.find((item) => item.id === id);
			if (item) {
				const oldQty = item.qty;
				const priceDiff = item.price * (qty - oldQty);
				item.qty = qty;
				state.totalAmnt += priceDiff;
				state.totalQnty += (qty - oldQty);
			}
		}
	}
});

export const { setToCart, addToCart, removeFromCart, updateQuantity } = productSlice.actions;

export default productSlice.reducer;