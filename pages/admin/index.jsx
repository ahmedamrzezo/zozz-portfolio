import Button from "../../components/shared/Button";
import FormField from "../../components/shared/FormField";

export default function Auth() {
	const login = () => {
		
	}

	return (
		<form
			className='form section__content'
			onSubmit={login}>
			<FormField
				label='Username'
				name='username'
				id='username'
				type='username'
				fieldType='input'
				autoComplete='username'
				required={true}
			/>
			<FormField
				label='Password'
				name='password'
				id='password'
				type='text'
				fieldType='input'
				autoComplete='password'
				required={true}
			/>

			<Button btnType='primary' size='small'>
				Login
			</Button>
		</form>
	);	
}
