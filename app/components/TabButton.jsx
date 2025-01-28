import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? 'text-text-primary border-b-2 border-primary'
		: 'text-text-primary border-b-2 border-transparent';

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-primary ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
