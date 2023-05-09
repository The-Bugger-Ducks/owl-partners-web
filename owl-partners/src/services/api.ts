import axios from "axios";
import sessionController from "../utils/controllers/session";

const api = axios.create({
	baseURL: "https://owlpartners.onrender.com",
});

api.interceptors.request.use(async (config: any) => {
	const token = sessionController.getToken();

	// if (token) {
	//   config.headers.Authorization = `Bearer ${token.replace(/"/g, "")}`;
	// }

	config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDg5M2RjNi05NjMxLTQ4YmEtODA3Ny1lOGM5NjNmZjJjZjMiLCJlbWFpbCI6ImVAZ21haWwuY29tIiwicm9sZSI6IlNJTVBMRSIsImlhdCI6MTY4MzY0MTMyMywiZXhwIjoxNjgzNzI3NzIzfQ.e44WxGLAh22iTnfNpf-1wOkYPXFxwpfnIwwVWX_I2JQ`;

	return config;
});

export default api;