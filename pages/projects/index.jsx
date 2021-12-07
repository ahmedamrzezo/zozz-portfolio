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
		<section>
			<h2>Projects List</h2>
			<div className="flex gap-x-5">
				{projects.map((project) => (
					<ProjectItem key={project} project={project} />
				))}
			</div>
		</section>
	);
}
