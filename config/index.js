require("dotenv").config();

const { PORT, MONGO_URI, JWT_PRIVATE_KEY } = process.env;

module.exports = {
	MONGO_URI,
	PORT,
	JWT_PRIVATE_KEY
};
