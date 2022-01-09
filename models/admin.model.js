const mongoose = require('mongoose');

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

const Admin = mongoose.models.Admin || mongoose.model('Admin', schema);

export default Admin;