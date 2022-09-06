import React from 'react';
import Head from "next/head"
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout({ title, children }) {
  return (
      <div>
          <Head>
              <title>{title ? title + " - Living Faith Church" : "Living Faith Church"}</title>
          </Head>
      <div className="z-20 flex flex-col min-h-screen text-white bg-black">
        <div className="">
          <Header />
        </div>
        <div className="flex-grow md:-mt-6 flex flex-col justify-center md:block">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
