import axios from "axios";

export const api = axios.create({
	baseURL: "https://owlpartners.onrender.com/api",
});

