import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'beforeagi' }) {
  return (
    <div className="sans" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Humanity on the Cusp of Transformational Change" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
