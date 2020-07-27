const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
	{
		company: String,
		domain: String,
		alexa: Number,
		city: String,
		state: String,
		country: String,
		description: String,
		employees: Number,
		founder_ceo: String,
		linkedin: String,
		twitter: String,
		techstack: String,
		javascript: String,
		cloud: String
	},
	{ timestamps: true }
);

module.exports = Company = mongoose.model("company", companySchema);
