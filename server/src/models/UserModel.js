import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
	email:{type: String, unique: true, required: true,lowercase: true},
	password: {type: String,required: true},
	firstName: {type: String},
	lastName: {type: String},
	phone: {type: String},
	image: {type: String,default:'../assets/img/user.png'},
},
	{
		timestamps: true,
		versionKey: false
	}
)

export default mongoose.model('users', DataSchema);