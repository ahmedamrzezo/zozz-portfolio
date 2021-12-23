const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
}, {
	timestamps: true
});

schema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id; }
});
const Project = mongoose.models.Project || mongoose.model("Project", schema);
export default Project;