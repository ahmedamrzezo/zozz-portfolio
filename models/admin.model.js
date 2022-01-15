const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 8
	}
});

schema.methods.toJSON = function () {
	const user = this.toObject({
		virtuals: true,
	});

	delete user.password;
	delete user.tokens;
	delete user.name;
	delete user._id;
	delete user.__v;

	return user;
};

schema.pre('save', async function (next) {
	const admin = this;

	if (admin.isModified('password')) {
		const saltRounds = 10;
		admin.password = await bcrypt.hash(admin.password, saltRounds);
	}

	next();
});

schema.statics.validatePassword = async function ({ username, password }) {
	const admin = await Admin.findOne({
		username,
	});

	if (!admin) {
		throw new Error('Admin does not exist!');
	}

	const isValidPassword = await bcrypt.compare(password, admin.password);

	if (isValidPassword) {
		return admin;
	} else {
		throw new Error('Invalid Credentials!');
	}
}
schema.methods.login = async function () {
	const admin = this;
	const token = jwt.sign({ id: admin._id.toString(), username: admin.username }, process.env.JWTSECRET, { expiresIn: '2h' });

	await admin.save();

	return token;
}

const Admin = mongoose.models.Admin || mongoose.model('Admin', schema);

export default Admin;