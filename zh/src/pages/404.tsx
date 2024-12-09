import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout title={<>404 找不到页面</>}>
      <Seo/>

      <div className="flex flex-col items-center justify-center h1-size">
          <h2>页面不存在，请输入正确的 URL。</h2>
      </div>
    </Layout>
  );
}
