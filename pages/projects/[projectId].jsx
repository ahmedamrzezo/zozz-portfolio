import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { server } from '../../config';

import dbConnect from '../../middleware/mongoose';
const Project = require('../../models/project.model');

export default function projectDetails({ project }) {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>Project - {project.title}</title>
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
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const res = await fetch(
		`${server}/api/projects/${context.params.projectId}`,
		{
			method: 'GET',
		}
	);
	const project = await res.json();
	return {
		props: {
			project,
		},
	};
}
