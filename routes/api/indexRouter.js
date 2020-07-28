const express = require("express");
const router = express.Router();

let { auth } = require("../../middlewares/auth");
const {
	getCompanies,
	getCompany,
	getCountries
} = require("../../controllers/indexController");

router.get("/companies", getCompanies);
router.get("/companies/:cid", auth, getCompany);
router.get("/countries", getCountries);

module.exports = router;
