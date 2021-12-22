require('../../../middleware/mongoose');
const Project = require('../../../models/project.model');

export default async function projectDetail(req, res) {
	try {
		const project = await Project.findById(req.query.projectId);
		res.status(200).json(project);
	} catch (error) {
		res.status(404).send();
	}

}
