import React, { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LineChart,
	Line,
	ResponsiveContainer
} from "recharts";

export default ({ companies, countries }) => {
	const [barData, setBarData] = useState([]);
	const [barData1, setBarData1] = useState([]);
	// const [tech, setTech] = useState([]);

	const jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

	const handleCountryChange = e => {
		let temp = [];
		let temp1 = [];
		// let tech = [];

		companies.map(c => {
			if (c.country === e.target.value) {
				temp.push({ name: c.company, alexa: c.alexa });
				temp1.push({ name: c.company, employees: c.employees });
				// tech.push(c.techstack);
			}
			return temp;
		});

		// let techset = new Set(tech);
		// let techstacks = Array.from(techset);
		// setTech(techstacks);
		setBarData(temp);
		setBarData1(temp1);
	};

	return (
		<div className="w-full md:w-5/12">
			<div>
				<select
					onChange={handleCountryChange}
					className="w-1/2 block appearance-none bg-white border border-color-500 text-color-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-color-700"
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
			</div>
			<div style={{ height: 250, width: "600" }}>
				<p className="text-color-700 mt-2 text-base font-bold">
					Alexa graph
				</p>
				{barData.length > 0 ? (
					<ResponsiveContainer>
						<BarChart data={barData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar
								dataKey="alexa"
								fill="#58c184"
								stroke="#0F9D58"
								strokeWidth={2}
								radius={2}
							/>
						</BarChart>
					</ResponsiveContainer>
				) : (
					<p className="text-color-600 mt-2 text-sm">
						select a country to load the graph
					</p>
				)}

				<p className="text-color-700 mt-2 text-base font-bold">
					Company size graph
				</p>
				{barData1.length > 0 ? (
					<ResponsiveContainer>
						<LineChart data={barData1}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								dataKey="employees"
								type="monotone"
								stroke="#58c184"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				) : (
					<p className="text-color-600 mt-2 text-sm">
						select a country to load the graph
					</p>
				)}
			</div>
		</div>
	);
};
