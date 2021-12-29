const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	skills: {
		type: [String],
		required: true
	},
	startedAt: {
		type: Date,
		required: true
	},
	completedAt: {
		type: Date,
		required: true
	},
	thumbnail: {
		type: Buffer
	},
	projectImages: {
		small: {
			type: Buffer
		},
		medium: {
			type: Buffer,
			// required: true
		},
		large: {
			type: Buffer
		}
	}
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