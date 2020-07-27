const Company = require("../models/Company");
const companies = require("../config/companies.json");

(async () => {
	try {
		console.log("seeding companies collection.\nremoving companies");
		await Company.deleteMany({});
		console.log("adding fresh data");
		await Company.create(companies);
		console.log("db seeded");
	} catch (err) {
		console.log(err);
	}
})();
