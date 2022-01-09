import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import Footer from './Footer';
import { AuthContextProvider } from '../../store/auth-context';

const Header = dynamic(() => import('./Header'));

function MainLayout({ children }) {
	return (
		<Fragment>
			<AuthContextProvider>
				{typeof window !== 'undefined' && <Header />}
				<main className="main-content">
					<div className="container mx-auto">
						{children}
					</div>
				</main>
			</AuthContextProvider>

			<Footer />
		</Fragment>
	);
}

export default MainLayout;
