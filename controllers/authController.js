const bcrypt = require("bcryptjs");
const User = require("../models/User");

const userRegister = async (req, res) => {
	let { email, password } = req.body;
	email = String(email).trim().toLowerCase();
	try {
		let user = await User.findOne({ email });
		if (user) {
			res.json({
				message: "user already exists",
				data: null,
				error: false
			});
		} else {
			let newUser = {
				email,
				password
			};
			const salt = await bcrypt.genSalt(10);
			newUser.password = await bcrypt.hash(newUser.password, salt);
			await User.create(newUser);
			res.json({
				message: "success",
				data: null,
				error: false
			});
		}
	} catch (err) {
		console.log(err);
		res.json({
			message: err.message,
			data: null,
			error: true
		});
	}
};

const userLogin = async (req, res) => {
	let { email, password } = req.body;
	try {
		email = String(email).trim().toLowerCase();
		let user = await User.findOne({ email });
		if (user) {
			let isValidPwd = await bcrypt.compare(password, user.password);
			if (isValidPwd) {
				const token = user.generateAuthToken();
				let { email, _id } = user;
				let userData = { email, _id };
				console.log(userData);
				res.header("x-auth-token", token).json({
					message: "success",
					data: userData,
					error: false
				});
			} else {
				res.json({
					message: "invalid creds",
					data: null,
					error: false
				});
			}
		} else {
			res.json({
				message: "user does not exist",
				data: null,
				error: false
			});
		}
	} catch (err) {
		console.log(err);
		res.json({
			message: err.message,
			data: null,
			error: true
		});
	}
};

module.exports = {
	userRegister,
	userLogin
};
