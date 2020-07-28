module.exports.getCompanies = async (req, res) => {
	try {
		const companies = await Company.find({});
		const data = { companies, count: companies.length };
		res.json({
			message: "success",
			data: data,
			error: false
		});
	} catch (err) {
		console.log(err);
		res.json({
			message: err.message,
			data: null,
			error: true
		});
	}
};

module.exports.getCompany = async (req, res) => {
	try {
		const company = await Company.findOne({ _id: req.params.cid });
		res.json({
			message: "success",
			data: company,
			error: false
		});
	} catch (err) {
		console.log(err);
		res.json({
			message: err.message,
			data: null,
			error: true
		});
	}
};

module.exports.getCountries = async (req, res) => {
	try {
		const company = await Company.find({});
		let temp = [];
		temp = company.map(c => c.country);
		let countrySet = new Set(temp);
		let countries = Array.from(countrySet);
		res.json({
			message: "success",
			data: countries,
			error: false
		});
	} catch (err) {
		console.log(err);
		res.json({
			message: err.message,
			data: null,
			error: true
		});
	}
};
