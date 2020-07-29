import React, { lazy, useEffect, useState } from "react";
import { getCompaniesService, getCountriesService } from "../utils/services";
import Charts from "./Charts";

import CompaniesList from "./CompaniesList";
import Header from "./Header";
import InputSection from "./InputSection";
import Sheet from "./Sheet";

const Container = () => {
	const [companies, setCompanies] = useState([]);
	const [countries, setCountries] = useState([]);
	const [companyInfo, setCompanyInfo] = useState({});
	const [sheetHidden, setSheetHidden] = useState(true);
	const [temp, setTemp] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				let res = await getCompaniesService();
				setCompanies(res.data.companies);
				setTemp(res.data.companies);
				res = await getCountriesService();
				setCountries(res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		})();
	}, []);

	const handleSearch = text => {
		setLoading(true);
		let filterCompanies = companies.filter(c =>
			c.company.toLowerCase().includes(text)
		);
		filterCompanies.length > 0 ? setTemp(filterCompanies) : setTemp([]);
		setLoading(false);
	};

	const handleFilter = ({ country, size = { min: 0, max: 10000 } }) => {
		setLoading(true);
		let filterCompanies;
		if (country && size) {
			filterCompanies = companies.filter(
				c =>
					c.employees >= size.min &&
					c.employees <= size.max &&
					c.country === country
			);
		} else if (country && !size) {
			filterCompanies = companies.filter(c => c.country === country);
		} else if (!country && size) {
			filterCompanies = companies.filter(
				c => c.employees >= size.min && c.employees <= size.max
			);
		}
		setTemp(filterCompanies);
		setLoading(false);
	};

	return (
		<section className="body-font relative">
			<Header />
			<InputSection
				companies={companies}
				onSearch={handleSearch}
				countries={countries}
				onFilter={handleFilter}
			/>
			<div className="py-6 bg-color-100">
				<div className="container px-5 w-full h-full mx-auto">
					<p className="text-color-600 mb-2 text-sm">
						Showing {companies && temp.length} companies
					</p>
					<div className="flex flex-col md:flex-row gap-4">
						<CompaniesList
							loading={loading}
							companies={temp}
							onMore={info => {
								setCompanyInfo(info);
								setSheetHidden(false);
							}}
						/>
						<Charts countries={countries} companies={companies} />
					</div>
				</div>
			</div>
			<Sheet
				hidden={sheetHidden}
				info={companyInfo}
				onClose={() => setSheetHidden(true)}
			/>
		</section>
	);
};

export default Container;
