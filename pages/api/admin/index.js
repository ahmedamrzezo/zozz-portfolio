import nextConnect from "next-connect";
import auth from "../../../middleware/auth";
import dbConnect from "../../../middleware/mongoose";
import Admin from "../../../models/admin.model";

const handler = nextConnect();

handler
	.use((req, res, next) => auth(req, res, next))
	.get(async (req, res) => {
		await dbConnect();

		const admins = await Admin.find();
		res.status(200).send(admins);
	})
	.post(async (req, res) => {
		await dbConnect();

		const { username, password } = req.body;
		const usernameExisted = await Admin.findOne({ username });

		if (usernameExisted) return res.status(409).send('Admin already exists!');

		const newAdmin = new Admin({ username, password });

		try {
			const admin = await newAdmin.save();
			res.status(201).send(admin);
		} catch (error) {
			res.status(400).send(error);
		}

	});

export default handler;