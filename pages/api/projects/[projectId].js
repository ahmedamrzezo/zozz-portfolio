import dbConnect from '../../../middleware/mongoose';
import Project from '../../../models/project.model';

export default async function projectDetail(req, res) {
	await dbConnect();
	try {
		const project = await Project.findById(req.query.projectId);
		res.status(200).json(project);
	} catch (error) {
		console.log(error);
		res.status(404).send();
	}

}
