import ProjectItem from '../../components/projects/ProjectItem/ProjectItem';
import { server } from '../../config';

export async function getStaticProps() {
	const res = await fetch(`${server}/api/projects`, { method: 'GET' });
	const projects = await res.json();
	return {
		props: {
			projects,
		},
	};
}

export default function Projects({ projects }) {
	return (
		<section className="section">
			<h2 className="section__title">Projects List</h2>
			<div className="section__content flex gap-x-5">
				{projects.map((project) => (
					<ProjectItem key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
