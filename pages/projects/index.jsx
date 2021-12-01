import ProjectItem from '../../components/projects/ProjectItem/ProjectItem';

export default function Projects() {
	return (
		<section>
			<h2>Projects List</h2>
			<div className="flex gap-x-5">
				{[1, 2, 3].map((project) => (
					<ProjectItem project={project} />
				))}
			</div>
		</section>
	);
}
