const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

schema.pre('save', async function(next) {
	const admin = this;

	if (admin.isModified('password')) {
		const saltRounds = 10;
		admin.password = await bcrypt.hash(admin.password, saltRounds);
	}
	console.log(admin)

	next();
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', schema);

export default Admin;