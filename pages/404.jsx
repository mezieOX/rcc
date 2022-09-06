import React from 'react';
import Layout from '../components/layout/Layout';


function NotFound() {
  return (
    <div className="">
      <Layout title="Download">
        <div className="h-screen flex items-center justify-center">
          <div className="bg-gray-100 text-black w-full text-center p-4 text-4xl font-[600]">
            Page Not Found
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default NotFound;
