import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
	return (
		<Fragment>
			<Header />

			<main className="container mx-auto mt-10 mb-auto">{children}</main>

			<Footer />
		</Fragment>
	);
}

export default MainLayout;
