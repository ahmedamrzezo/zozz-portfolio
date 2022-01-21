import nextConnect from "next-connect";
import Admin from "../../../models/admin.model";
import dbConnect from '../../../middleware/mongoose'
import { setTokenCookie } from "../../../utils/auth-cookies";

const handler = nextConnect();

handler
	.post(async (req, res, next) => {
		try {
			await dbConnect();
			const admin = await Admin.validatePassword(req.body);

			const token = await admin.login(req.body.password);
			await setTokenCookie(res, token);
			return res.status(200).send({ admin, token });
		} catch (error) {
			return next(error);
		}
	});

export default handler;