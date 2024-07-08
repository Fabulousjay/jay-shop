/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500, //in cent
	tax: 0,
	orderToal: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: defaultState,
	reducers: {
		addItem: (state, action) => {
			console.log(action.payload);
		},
		clearCart: (state) => {},
		removeItem: (state, action) => {},
		editItem: (state, cart) => {},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
