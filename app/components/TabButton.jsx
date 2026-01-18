import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	return (
		<button 
			onClick={selectTab}
			className={`
				relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out
				${active 
					? 'text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25 scale-105' 
					: 'text-text-secondary bg-transparent hover:bg-primary/10 hover:text-primary hover:scale-102'
				}
				border border-transparent hover:border-primary/20
				transform-gpu
			`}
		>
			{/* Background glow effect for active state */}
			{active && (
				<div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg blur-sm opacity-30 -z-10"></div>
			)}
			
			{/* Icon indicators */}
			<span className="flex items-center gap-2">
				{children.trim() === 'Skills' && (
					<span className="text-sm">💻</span>
				)}
				{children.trim() === 'Education' && (
					<span className="text-sm">🎓</span>
				)}
				{children.trim() === 'Experience' && (
					<span className="text-sm">💼</span>
				)}
				{children}
			</span>
			
			{/* Active indicator dot */}
			{active && (
				<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-sm"></div>
			)}
		</button>
	);
};

export default TabButton;
