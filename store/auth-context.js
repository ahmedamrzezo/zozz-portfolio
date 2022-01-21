import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

const AuthContext = React.createContext({
	isAdmin: false,
	loginHandler() { },
	logoutHandler() { }
})

export const AuthContextProvider = ({ children }) => {
	if (typeof window !== "undefined") {
		const token = document.cookie.replace('token=', '');

		const [isAdmin, setIsAdmin] = useState(!!token);

		const navigate = useRouter();

		const loginHandler = useCallback(async (body) => {
			try {
				const res = await fetch('/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				});

				if (res.status === 200) {
					setIsAdmin(true);
					navigate.push('/projects/add');
				} else {
					throw new Error(await res.text());
				}
			} catch (error) {
				console.error(
					'An unexpected error happened occurred:',
					error,
				);
			}

		}, [navigate]);

		const logoutHandler = () => {
			document.cookie.trim();
			setIsAdmin(false);

			navigate.push('/login');
		};

		return <AuthContext.Provider value={{ isAdmin, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
	}
	else {

		return <AuthContext.Provider value={{ isAdmin: false, loginHandler() { }, logoutHandler() { } }}>{children}</AuthContext.Provider>;
	}

};

export default AuthContext;