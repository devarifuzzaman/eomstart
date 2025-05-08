import {LoginServices, LogOutService, RegisterServices} from "../services/UserServices.js";


export const register= async (req, res)=>{
	let result= await RegisterServices(req);
	return res.json(result);
}
export const login= async (req, res)=>{
	let result= await LoginServices(req,res);
	return res.json(result);
}

// export const OtpVerification= async (req, res)=>{
// 	let result= await OtpVerificationServices(req);
// 	if(result.status=='success'){
// 		let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}
// 		res.cookie('token',result['token'],cookieOption);
// 		res.status(200).json(result);
// 	}else{
// 		res.status(400).json({"message":result['message']});
// 	}

// }

export const logout = async (req, res) => {
	let result = await LogOutService(req, res);
	return res.json(result);
};

export const CreateProfile= async (req, res)=>{
	let result= await SaveProfileServices(req);
	res.status(200).json(result);
}

export const UpdateProfile= async (req, res)=>{
	let result= await SaveProfileServices(req);
	res.status(200).json(result);
}

export const ReadProfile= async (req, res)=>{

	let result= await GetProfileServices(req);
	res.status(200).json(result);
}



