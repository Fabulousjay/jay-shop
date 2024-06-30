/** @format */

import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
	const response = await customFetch(url);

	const products = response.data.data; //The useLoaderData hook is imported from react-router-dom because it is part of the React Router library’s system for managing data loading in routes. It provides a way to access the data fetched by loader functions defined in your route configuration. This ensures that your components have access to the necessary data when they are rendered as part of the route.

	return { products };
};
const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};

export default Landing;
