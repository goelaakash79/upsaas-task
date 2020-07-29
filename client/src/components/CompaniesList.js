import React, { lazy } from "react";
import Company from "./Company";

const CompaniesList = ({ companies, onMore, loading }) => {
	return (
		<div className="results-list w-full md:w-7/12">
			{companies.length > 0 ? (
				companies.map((company, id) => (
					<Company
						key={id}
						info={company}
						onMore={info => onMore(info)}
					/>
				))
			) : (
				<div
					className="loader ease-linear rounded-full border-8 border-t-8 border-color-400 h-12 w-12"
					hidden={loading ? false : true}
				></div>
			)}
		</div>
	);
};

export default CompaniesList;
