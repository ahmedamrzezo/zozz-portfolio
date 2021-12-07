import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
	return (
		<Fragment>
			<Header />

			<main className="main-content">
				<div className="container mx-auto">{children}</div>
			</main>

			<Footer />
		</Fragment>
	);
}

export default MainLayout;
