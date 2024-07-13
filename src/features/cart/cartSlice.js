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

			// Check if the item already exists in the cart
			const item = state.cartItems.find((i) => i.cartID === product.cartID);

			if (item) {
				// If item exists, update the amount
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			// Update cart totals
			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;
			// Recalculate tax and order total
			cartSlice.caseReducers.calculateTotals(state);

			toast.success('Items Added to Cart Successfully');
		},
		clearCart: (state) => {
			localStorage.setItem('cart', JSON.stringify(defaultState));
			return defaultState;
		},

		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);
			state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
			state.numItemsInCart -= product.amount;
			state.cartTotal -= product.price * product.amount;
			cartSlice.caseReducers.calculateTotals(state);
			toast.error('Item removed from cart');
		},
		editItem: (state, action) => {
			const { cartID, amount } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === cartID);
			state.numItemsInCart += amount - item.amount;
			state.cartTotal += item.price * (amount - item.amount);
			item.amount = amount;
			cartSlice.caseReducers.calculateTotals(state);
			toast.success('Cart Updated');
		},
		calculateTotals: (state) => {
			//since we are gonna be using the three lines of code below
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
