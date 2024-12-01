import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout title={<>Yuantian's Blog</>}>
      <Seo/>
      <div className="textbox center-box">
        <p> COMMING SOON </p>
      </div>
    </Layout>
  );
}
