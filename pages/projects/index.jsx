import { Fragment } from 'react';
import Head from 'next/head';
import ProjectItem from '../../components/projects/ProjectItem/ProjectItem';
import { server } from '../../config';

export async function getStaticProps() {
	try {
		const res = await fetch(`${server}/projects`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (res.ok) {
			const projects = await res.json();
			return {
				props: {
					projects,
				},
			};
		} else {
			throw new Error(res.statusText);
		}
	} catch (error) {
		console.error(error);
	}
}

export default function Projects({ projects }) {
	return (
		<Fragment>
			<Head>
				<title>Project List</title>
			</Head>
			<section className="section">
				<h2 className="section__title">Projects List</h2>
				<div className="section__content flex gap-x-5">
					{projects.map((project) => (
						<ProjectItem key={project.id} project={project} />
					))}
				</div>
			</section>
		</Fragment>
	);
}
