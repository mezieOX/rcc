import React from 'react';
import About from '../components/about/About';
import ImageCarousel from '../components/carousel/ImageCarousel';
import SubHeader from '../components/header/SubHeader';
import Layout from '../components/layout/Layout';

function Home() {
  return (
    <Layout>
      <div>
        <SubHeader />
        <ImageCarousel />
        <About />
      </div>
    </Layout>
  );
}

export default Home;
