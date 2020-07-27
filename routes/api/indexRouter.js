const express = require("express");
const router = express.Router();

let { auth } = require("../../middlewares/auth");
const {
	getCompanies,
	getCompany
} = require("../../controllers/indexController");

router.get("/companies", getCompanies);
router.get("/companies/:cid", auth, getCompany);

module.exports = router;
