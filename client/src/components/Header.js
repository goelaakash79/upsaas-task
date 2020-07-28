import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="container pt-5 px-5 mx-auto">
			<div className="w-full">
				<h1 className="sm:text-4xl text-2xl font-black title-font mb-4 text-color-400">
					upSaaS
					{/* <Link
						to="/login"
						className="float-right text-sm text-color-600 font-medium"
					>
						Login
					</Link> */}
				</h1>
			</div>
		</div>
	);
};

export default Header;
