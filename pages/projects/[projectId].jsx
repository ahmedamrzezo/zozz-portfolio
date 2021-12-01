import { useRouter } from 'next/router';
import ProjectDetail from '../../components/projects/ProjectDetail/ProjectDetail';

export default function AddProject() {
	const router = useRouter();

	return <ProjectDetail project={router.query.projectId} />;
}
