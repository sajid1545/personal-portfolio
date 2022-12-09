import React from 'react';
import { Triangle } from 'react-loader-spinner';

const MainSpinner = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<Triangle
				height="480"
				width="780"
				color="#8D41A9"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
};

export default MainSpinner;
