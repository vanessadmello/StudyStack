import axios from "axios";

const API_URL =
	process.env.REACT_APP_ENV === "PROD"
		? process.env.REACT_APP_PROD
		: process.env.REACT_APP_DEV;

export const registerUser = (data) => {
	return axios.post(API_URL + "user", data, { validateStatus: false });
};

export const loginUser = (data) => {
	return axios.post(API_URL + "login/user", data, { validateStatus: false });
};

export const deleteUser = (userId) => {
	return axios.delete(API_URL + "user", {
		params: { id: userId },
	});
};

export const updateUser = (userId, data) => {
	return axios.put(API_URL + "user", data, {
		params: { id: userId },
	});
};

export const fetchProgress = (userId) => {
	return axios.get(API_URL + "user/progress", {
		params: { id: userId },
	});
};
