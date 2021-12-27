import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { server } from '../../config';

import dbConnect from '../../middleware/mongoose';
import Project from '../../models/project.model';

export default function projectDetails({ project }) {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>{project.title} - Project - Zozz</title>
			</Head>
			<h2>Project details: {project.title}</h2>
		</Fragment>
	);
}

export async function getStaticPaths() {
	await dbConnect();
	const projects = await Project.find({}, { _id: 1 });
	return {
		paths: projects.map((pr) => ({
			params: {
				projectId: pr._id.toString(),
			},
		})),
		fallback: 'blocking',
	};
}

export async function getStaticProps(context) {
	try {
		const res = await fetch(`${server}/projects/${context.params.projectId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (res.ok) {
			const project = await res.json();
			return {
				props: {
					project,
				},
			};
		} else {
			throw new Error(res.statusText);
		}
	} catch (error) {
		console.error(error);
		return {
			props: {
				project: {},
			},
		};
	}
}
