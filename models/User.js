const { JWT_PRIVATE_KEY } = require("../config");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		password: { type: String, required: true }
	},
	{ timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{
			id: this._id,
			email: this.email
		},
		JWT_PRIVATE_KEY
	);
	return token;
};

module.exports = User = mongoose.model("User", UserSchema);
