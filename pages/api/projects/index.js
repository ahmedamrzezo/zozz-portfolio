import dbConnect from '../../../middleware/mongoose';
import Project from '../../../models/project.model';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    await addProject(req, res);
  }
  if (req.method === 'GET') {
    await getProjects(req, res);
  }
}

const addProject = async (req, res) => {
  const newProject = new Project(req.body);

  try {
    const project = await newProject.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};
