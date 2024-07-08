/** @format */

import { ProductsContainer, PaginationContainer, Filters } from '../components';

import { customFetch } from '../utils';
const url = '/products';

export const loader = async ({ request }) => {
	// console.log(request);
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);

	console.log(params);

	const response = await customFetch(url, { params });
	// console.log(response);
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta, params }; //params is being used in the filter component
};
const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
