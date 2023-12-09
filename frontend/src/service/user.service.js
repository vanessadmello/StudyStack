import axios from "axios";

const API_URL = process.env.REACT_APP_DEV;

export const registerUser = (data) => {
	return axios.post(API_URL + "user", data);
};

export const loginUser = (data) => {
	return axios.post(API_URL + "login/user", data, { validateStatus: false });
};

export const deleteUser = (userId) => {
	return axios.delete(API_URL + "user", {
		params: { id: userId },
	});
};

export const updateuser = (userId, data) => {
	return axios.put(API_URL + "user", data, {
		params: { id: userId },
	});
};
