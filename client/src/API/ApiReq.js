import {ErrorToast, SuccessToast} from "../helper/Helper";
import axios from "axios";


let baseURL = "http://localhost:5000/api";

export const UserRegister = async (reqBody) => {
	let result = await axios.post(`${baseURL}/register`, reqBody);
	if (result.data.status === true) {
		SuccessToast(result.data.msg);
		return true;
	} else {
		ErrorToast(result.data.msg);
		return false;
	}
};

export const UserLogin = async (reqBody) => {
	let result = await axios.post(`${baseURL}/login`, reqBody,{
		withCredentials: true
	});
	if (result.data.status === true) {
		SuccessToast(result.data.msg);
		return true;
	} else {
		ErrorToast(result.data.msg);
		return false;
	}
};

export const UserLogout = async (reqBody) => {
	let result = await axios.get(`${baseURL}/logout`, {
		withCredentials: true,
	});
	if (result.data.status === true) {
		SuccessToast(result.data.msg);
		return true;
	}else {
		ErrorToast(result.data.msg);
		return false;
	}
}

