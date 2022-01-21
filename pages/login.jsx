import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';
import Button from '../components/shared/Button';
import FormField from '../components/shared/FormField';
import AuthContext from '../store/auth-context';
import { returnRefValue } from '../utils/helper';

export default function Login() {
	const usernameRef = useRef('');
	const passwordRef = useRef('');
	const router = useRouter();

	const authCtx = useContext(AuthContext);

	const login = async (ev) => {
		ev.preventDefault();
		const body = {
			username: returnRefValue(usernameRef),
			password: returnRefValue(passwordRef),
		};
		authCtx.loginHandler(body);
	};

	useEffect(() => {
		if (authCtx.isAdmin) {
			router.push('/');
		}
		return;
	}, []);
	return (
		<>
			{!authCtx.isAdmin && (
				<form
					className="form section__content"
					onSubmit={login}>
					<FormField
						label="Username"
						name="username"
						id="username"
						type="text"
						autoComplete="username"
						fieldType="input"
						required={true}
						fieldRef={usernameRef}
					/>
					<FormField
						label="Password"
						name="password"
						id="password"
						type="password"
						fieldType="input"
						required={true}
						fieldRef={passwordRef}
					/>

					<Button
						type="submit"
						btnType="primary"
						size="small">
						Login
					</Button>
				</form>
			)}
		</>
	);
}
