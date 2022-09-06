import React from 'react';
import Layout from '../components/layout/Layout';
import Main from '../components/main/Main';
import EmailIcon from "@material-ui/icons/Email"

function Home() {
  return (
    <div>
      <Layout title="Home">
        <Main />
        <div className="fixed bottom-2 md:bottom-4 md:right-8  lg:bottom-10 left-2 lg:left-10">
          <EmailIcon className="p-2 !text-4xl !text-white shadow-lg md:!text-5xl lg:!text-6xl rounded-full border border-red-500 cursor-pointer" />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
