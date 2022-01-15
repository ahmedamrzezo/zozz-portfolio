import jsonwebtoken from 'jsonwebtoken';
import Admin from '../models/admin.model';
import dbConnect from './mongoose';

const auth = async (req, res, next) => {
	if (req.method !== 'POST') { return next(); }

	try {
		const token = req.headers.authorization.replace('Bearer ', '');
		if (!token) { throw new Error('There is no token!') }

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
