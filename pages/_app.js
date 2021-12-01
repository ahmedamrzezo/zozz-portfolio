import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <main className="container mx-auto mt-10 mb-auto">
        <Component {...pageProps} />
      </main>

      <Footer />
    </Fragment>
  );
}

export default MyApp;
