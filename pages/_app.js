import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
