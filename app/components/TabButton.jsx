import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? 'text-white border-b-2 border-blue-500'
		: 'text-[#ADB7BE] border-b-2 border-transparent';

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
