// MONGODB CONNECTION
export const DATABASE = "mongodb+srv://<username>:<password>@cluster0.urx7h.mongodb.net/ecomstart?retryWrites=true&w=majority&appName=Cluster0";
export const option = {
	user:"ecomapi",
	pass:"ecomapi",
	autoIndex:true
}
// JWT config
export const JWT_KEY = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30;

// Email config
export const EMAIL_HOST="mail.teamrabbil.com"
export const EMAIL_PORT=25
export const EMAIL_SECURITY=false
export const EMAIL_USER="info@teamrabbil.com"
export const EMAIL_PASSWORD="~sR4[bhaC[Qs"
export const EMAIL_AUTH=false

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; //15 Min
export const REQUEST_LIMIT_NUMBER = 200; //2000 Request Per 15 Min

export const WEB_CACHE = false;
export const PORT = 5000;
