import React from "react";

const Company = ({ info, onMore }) => {
	let { company, city, state, country, description } = info;
	const handleMore = () => {
		onMore(info);
	};
	return (
		<div
			className="rounded cursor-pointer py-4 px-6 bg-color-100 border border-color-500 mb-4"
			onClick={handleMore}
		>
			<div>
				<span className="text-2xl font-bold">{company}</span>
				<br className="md:hidden" />
				<span className="text-color-400 md:float-right font-bold">
					{`${city}, ${state}, ${country}`}
				</span>
			</div>
			<p className="text-color-600 text-sm mt-2">{description}</p>
		</div>
	);
};

export default Company;
