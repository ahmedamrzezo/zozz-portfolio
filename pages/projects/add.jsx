import { useRouter } from 'next/dist/client/router';
import { useContext, useEffect } from 'react';
import Button from '../../components/shared/Button';
import FormField from '../../components/shared/FormField';
import { getFormValues } from '../../utils/helper';
import AuthContext from '../../store/auth-context';

export default function Add() {
	const router = useRouter();

	const authCtx = useContext(AuthContext);

	useEffect(() => {
		if (!authCtx.isAdmin) {
			router.push('/');
		}
		return;
	}, []);

	const addProject = async (ev) => {
		ev.preventDefault();

		const newProject = {
			title: getFormValues(ev, 'title'),
			description: getFormValues(ev, 'description'),
			skills: getFormValues(ev, 'skills'),
			startedAt: getFormValues(ev, 'startedAt'),
			completedAt: getFormValues(ev, 'completedAt'),
		};

		console.log(newProject);

		// try {
		// 	const res = await fetch(`${server}/projects`, {
		// 		body: JSON.stringify(newProject),
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	});
		// 	if (res.ok) {
		// 		console.log('success');
		// 		router.push('/projects');
		// 	} else {
		// 		throw new Error(res.statusText);
		// 	}
		// } catch (error) {
		// 	console.error(error);
		// }
	};
	return (
		<section className="section">
			<h2 className="section__title">Add Project</h2>
			<form
				className="form section__content"
				onSubmit={addProject}>
				<FormField
					label="Title"
					name="title"
					id="title"
					type="text"
					fieldType="input"
					required={true}
				/>
				<FormField
					label="Description"
					name="description"
					id="description"
					type="text"
					fieldType="textarea"
					required={true}
				/>
				<FormField
					label="Skills"
					name="skills"
					id="skills"
					type="text"
					fieldType="select"
					selectItems={['Angular', 'React']}
					required={true}
				/>
				<div className="grid grid-cols-2 gap-x-4">
					<FormField
						label="Started At"
						name="startedAt"
						id="startedAt"
						type="date"
						fieldType="input"
						required={true}
					/>
					<FormField
						label="Completed At"
						name="completedAt"
						id="completedAt"
						type="date"
						fieldType="input"
						required={true}
					/>
				</div>
				{/* <div className="form-group">
					<label className="form-label" htmlFor="title">
						Title
					</label>
					<input
						className="form-control"
						type="text"
						name="title"
						id="title"
						ref={titleRef}
					/>
				</div> */}

				<Button btnType="primary" size="small">
					Submit
				</Button>
			</form>
		</section>
	);
}
