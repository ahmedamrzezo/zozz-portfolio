export default function projectDetail(req, res) {
	res.status(200).json([1, 2, 3, 6].find(i => i == req.query.projectId));
}
