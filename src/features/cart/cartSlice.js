/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500, //in cent
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorge = () => {
	return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	// initialState: defaultState,
	initialState: getCartFromLocalStorge(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find((i) => i.cardID === product.cardID);

			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
			toast.success('Items Added to Cart Successfully');
		},
		clearCart: (state) => {},
		removeItem: (state, action) => {},
		editItem: (state, cart) => {},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
