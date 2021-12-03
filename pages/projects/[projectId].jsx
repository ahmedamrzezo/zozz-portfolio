import { useRouter } from 'next/router';

export default function AddProject() {
	const router = useRouter();

	return <h2>Project details: {router.query.projectId}</h2>;
}
