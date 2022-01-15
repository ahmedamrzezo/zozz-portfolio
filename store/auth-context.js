import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
	isAdmin: false,
	loginHandler() {},
	logoutHandler() {}
})

export const AuthContextProvider = ({ children }) => {
	if (typeof window !== "undefined") {
		const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('admin'));
		
		const navigate = useRouter();

		const loginHandler = useCallback((data, redirect = false) => {
			setIsAdmin(true);

			if (data) {
				localStorage.setItem('admin', JSON.stringify(data));
			}

			if (redirect)
				navigate.push('/expenses');

		}, [navigate]);

		useEffect(() => {
			const adminData = JSON.parse(localStorage.getItem('admin')) || {};
			if (adminData.token) {
				loginHandler();
			}
		}, [loginHandler]);

		const logoutHandler = () => {
			localStorage.removeItem('admin');
			setIsAdmin(false);

			navigate.push('/');
		};

		return <AuthContext.Provider value={{ isAdmin, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
	}
	else {

		return <AuthContext.Provider value={{ isAdmin: false, loginHandler () {}, logoutHandler() {} }}>{children}</AuthContext.Provider>;
	}
	
};

export default AuthContext;