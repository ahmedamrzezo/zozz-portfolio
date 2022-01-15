import { useRouter } from 'next/dist/client/router';
import { useRef } from 'react';
import Button from '../../components/shared/Button';
import FormField from '../../components/shared/FormField';
import { server } from '../../config';

export default function Add() {
	const titleRef = useRef('');
	const router = useRouter();

	const addProject = async (ev) => {
		ev.preventDefault();

		const newProject = {
			title: titleRef.current.value,
		};

		console.log(titleRef);

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
			<form className="form section__content" onSubmit={addProject}>
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
						name="startedAt"
						id="startedAt"
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
