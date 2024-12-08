import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout title={<>404 Not Found</>}>
      <Seo/>

      <div className="flex flex-col items-center justify-center">
          <h2>The page you are looking for does not exist.</h2>
      </div>
    </Layout>
  );
}
