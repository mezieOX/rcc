import React from 'react';
import Head from 'next/head';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Head>
        <title>{title ? title + ' - RCC' : 'RCC'}</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" description="RCC Company Official Website!!!" />
              <link rel="shortcut icon" href="/images/609-6094933_rcc-logo-graphic-design-hd-png-download.png" className="rounded-full" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="flex-grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
