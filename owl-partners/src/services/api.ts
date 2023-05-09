import axios from "axios";
import sessionController from "../utils/controllers/session";

const api = axios.create({
	baseURL: "https://owlpartners.onrender.com/api",
});

api.interceptors.request.use(async (config: any) => {
	const token = sessionController.getToken();

	if (token) {
	  config.headers.Authorization = `Bearer ${token.replace(/"/g, "")}`;
	}

	return config;
});

export default api;