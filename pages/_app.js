import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import MainLayout from '../components/layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
