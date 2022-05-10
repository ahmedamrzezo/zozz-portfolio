import { serialize } from "cookie"

const TOKEN_NAME = 'token';

export const MAX_AGE = 60;

export async function setTokenCookie(res, token) {
	const cookie = serialize(TOKEN_NAME, token, {
		maxAge: MAX_AGE,
		expires: new Date(Date.now() + MAX_AGE * 1000),
		httpOnly: false,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		sameSite: 'lax',
	})

	res.setHeader('Set-Cookie', cookie);
}