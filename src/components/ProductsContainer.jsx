/** @format */

import React, { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs'; // Import icons for grid and list view
import ProductGrids from './ProductGrids';
import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router-dom';

const ProductsContainer = () => {
	// Assume meta and useLoaderData() are properly defined elsewhere
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;

	console.log(totalProducts);

	const [layout, setLayout] = useState('grid');

	const setActiveStyles = (type) => {
		return `text-xl btn btn-circle btn-sm ${
			layout === type
				? 'bg-primary text-primary-content'
				: 'btn-ghost text-based-content'
		}`;
	};

	return (
		<>
			<div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
				<h4 className="font-medium text-md">
					{totalProducts} product{totalProducts > 1 && 's'}
				</h4>
				<div className="flex gap-x-2">
					<button
						type="button"
						onClick={() => setLayout('grid')}
						className={setActiveStyles('grid')}>
						<BsFillGridFill />
					</button>
					<button
						type="button"
						onClick={() => setLayout('list')}
						className={setActiveStyles('list')}>
						<BsList />
					</button>
				</div>
			</div>
			<div>
				{totalProducts === 0 ? (
					<h5 className="text-2xl mt-16">
						Sorry, no products matched your search...
					</h5>
				) : layout === 'grid' ? (
					<ProductGrids />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
