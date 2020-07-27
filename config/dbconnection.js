const { MONGO_URI } = require("../config");
const mongoose = require("mongoose");

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect

(async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("MongoDB Connected");
	} catch (err) {
		console.log(err);
	}
})();
