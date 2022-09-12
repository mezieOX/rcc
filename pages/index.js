import React from 'react';
import About from '../components/about/About';
import ImageCarousel from '../components/carousel/ImageCarousel';
import Layout from '../components/layout/Layout';

function Home() {
  return (
    <Layout title="Home">
      <div>
        <ImageCarousel />
        <About />
      </div>
    </Layout>
  );
}

export default Home;
