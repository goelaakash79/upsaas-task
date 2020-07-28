import React, { useState } from "react";

const InputSection = ({ companies, onSearch, countries, onFilter }) => {
	const [text, setText] = useState("");
	const [country, setCountry] = useState("");
	const [size, setSize] = useState("");

	const emplist = [
		{ min: 0, max: 10, text: "0 - 10" },
		{ min: 11, max: 50, text: "11 - 50" },
		{ min: 51, max: 100, text: "51 - 100" },
		{ min: 101, max: 500, text: "101 - 500" },
		{ min: 501, max: 1000, text: "501 - 1000" },
		{ min: 1001, max: 5000, text: "1000+" }
	];
	const handlSearch = e => {
		if (e.key === "Enter" && String(text).length >= 2) {
			setCountry("");
			setSize("");
			onSearch(text.toLowerCase());
		}
	};

	const handleFilter = () => {
		onFilter({ country, size });
	};

	return (
		<>
			<div className="py-10 bg-section">
				<div className="container px-5 w-full mx-auto">
					<input
						className="w-full md:w-1/2 lg:w-1/4 bg-white rounded border border-color-500 focus:outline-none focus:border-color-700 text-base px-4 py-2 shadow"
						placeholder="Search for a SaaS company"
						type="text"
						onKeyPress={handlSearch}
						onChange={e => setText(e.target.value)}
					/>
				</div>
			</div>
			<div className="py-6 border-b border-color-500">
				<div className="container px-5 w-full mx-auto">
					<div className="flex flex-row gap-4">
						<select
							onChange={e => setCountry(e.target.value)}
							className="w-1/2 md:w-1/6 block appearance-none bg-white border border-color-500 text-color-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-color-700"
							id="grid-state"
							defaultValue="Country"
						>
							<option disabled>Country</option>
							{countries &&
								countries.map((c, id) => (
									<option key={id} value={c}>
										{c}
									</option>
								))}
						</select>
						<select
							onChange={e => setSize(JSON.parse(e.target.value))}
							className="w-1/2 md:w-1/6 block appearance-none bg-white border border-color-500 text-color-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-color-700"
							id="grid-state"
							defaultValue="Company Size"
						>
							<option disabled>Company Size</option>
							{emplist &&
								emplist.map((c, id) => (
									<option key={id} value={JSON.stringify(c)}>
										{c.text}
									</option>
								))}
						</select>
						<button
							className="text-color-700 text-sm font-semibold"
							onClick={handleFilter}
						>
							Filter
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default InputSection;
