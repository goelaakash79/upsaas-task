import { LOGIN, REGISTER, GET_COMPANIES, GET_COUNTRIES } from "./routes";
import http from "./httpService";

const isLoggedIn = () => {
	const userToken = localStorage.getItem("token");
	if (userToken) {
		http.setUserToken(userToken);
		return userToken;
	} else {
		return false;
	}
};

const loginService = async data => {
	const response = await http.post(LOGIN, data).catch(error => {
		if (error.response) {
			return error.response;
		}
	});
	if (response.status === 200) {
		localStorage.setItem("token", response.headers["x-auth-token"]);
	}
	return response.data;
};

const registerService = async data => {
	const response = await http.post(REGISTER, data).catch(error => {
		if (error.response) {
			return error.response;
		}
	});
	return response.data;
};

const logout = () => {
	localStorage.clear();
	window.location.assign("/login");
};

const getCompaniesService = async () => {
	try {
		const response = await http.get(GET_COMPANIES);
		if (response.status === 200 && response.data.error === false) {
			return response.data;
		} else return response.data;
	} catch (err) {
		return err.response.data;
	}
};

const getCountriesService = async () => {
	try {
		const response = await http.get(GET_COUNTRIES);
		if (response.status === 200 && response.data.error === false) {
			return response.data;
		} else return response.data;
	} catch (err) {
		return err.response.data;
	}
};

const getCompanyService = async params => {
	const { cid } = params;
	const isOkay = isLoggedIn();
	if (isOkay) {
		try {
			const response = await http.get(`${GET_COMPANIES}/${cid}`);
			if (response.status === 200 && response.data.error === false) {
				return response.data;
			} else return response.data;
		} catch (err) {
			return err.response.data;
		}
	} else {
		window.location.push("/login");
	}
};

export {
	loginService,
	logout,
	isLoggedIn,
	registerService,
	getCompaniesService,
	getCompanyService,
	getCountriesService
};
