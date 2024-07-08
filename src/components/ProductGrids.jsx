/** @format */

import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductGrids = () => {
	const { products } = useLoaderData();
	//The useLoaderData hook is imported from react-router-dom
	//because it is part of the React Router library’s system for managing data loading in routes.
	// It provides a way to access the data fetched by loader functions defined in your route configuration.
	//This ensures that your components have access to the necessary data when they are rendered as part of the route.

	// console.log(products);
	return (
		<div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => {
				const { title, price, image } = product.attributes;
				const dollarAmount = formatPrice(price);

				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
						<figure className="px-4 py-4">
							<img
								src={image}
								alt={title}
								className="rounded-xl h-64 md:h-48 w-full object-cover"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title capitalize tracking-wider">{title}</h2>
							<span className="text-secondary">{dollarAmount}</span>
						</div>
					</Link>
				); //id  coming from the route set in app.jsx
			})}
		</div>
	);
};

export default ProductGrids;
