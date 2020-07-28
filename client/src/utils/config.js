export const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://upsass-backend.herokuapp.com/api"
		: "http://localhost:4000/api";
