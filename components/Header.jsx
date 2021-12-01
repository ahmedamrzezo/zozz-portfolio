import Link from 'next/link';
import Button from '../shared/ui/Button';

export default function Header() {
	return (
		<header className="bg-primary_light_color primary_color p-4">
			<div className="flex justify-between container mx-auto items-center">
				<div className="font-bold text-3xl">Zozz</div>
				<nav className="nav-links flex-end">
					<Link href="/">
						<a className="nav-links__link-item">Home</a>
					</Link>
					<Link href="/projects">
						<a className="nav-links__link-item">Projects</a>
					</Link>
					<Link href="/projects/add">
						<a>
							<Button btnType="primary" size="dynamic" haveHover={false}>
								Add New Project
							</Button>
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
