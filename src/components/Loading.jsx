/** @format */

import React from 'react';

const Loading = () => {
	return (
		<div className="h-screen flex items-center justify-center">
			<span className="loading loading-spinner text-success loading-lg"></span>
		</div>
	);
};

export default Loading;

//ensure you import it in the homelayout
