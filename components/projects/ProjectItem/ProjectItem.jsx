import styles from './ProjectItem.module.scss';
import Link from 'next/link';

export default function ProjectItem({ project }) {
	return (
		<div className={styles.project}>
			<Link href={'/projects/' + project.id}>
				<a className="link">{project.title}</a>
			</Link>
		</div>
	);
}
