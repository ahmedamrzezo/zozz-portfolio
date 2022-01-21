import jsonwebtoken from 'jsonwebtoken';
import Admin from '../models/admin.model';
import dbConnect from './mongoose';

const auth = async (req, res, next, postOnly = false) => {
	console.log(req.cookies);
	if (req.method !== 'POST', postOnly) { return next(); }

	try {
		if (!req.headers.authorization) { throw new Error('There is no token!') }
		const token = req.headers.authorization.replace('Bearer ', '');

		const decoded = jsonwebtoken.verify(token, process.env.JWTSECRET);

		await dbConnect();

		const admin = await Admin.findOne({
			_id: decoded.id,
			token,
		});

		if (!admin) { throw new Error('You are not authorized!') }

		req.token = token;
		req.admin = admin;
		req.expiresIn = decoded.exp;

		next();
	} catch (error) {
		res.status(401).send(error.toString());
	}


}

export default auth;
