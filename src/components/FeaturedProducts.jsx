/** @format */

import React from 'react';
import SectionTitle from './SectionTitle';
import ProductGrids from './ProductGrids';

const FeaturedProducts = () => {
	return (
		<div className="pt-24">
			{' '}
			<SectionTitle text="featured products" />
			<ProductGrids />
		</div>
	);
};

export default FeaturedProducts;
