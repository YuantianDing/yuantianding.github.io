import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PageGrid from '@/components/text/PageGrid';
import PageLink from '@/components/buttons/PageLink';

export default function HomePage() {
  return (
    <Layout title={<>Yuantian's Blog</>}>
      <Seo/>
      <h2 className='font-nosmallcaps ml-5 mt-14'>English Study Notes</h2>
      <PageGrid>
          <PageLink href="notes/felicity" timenote="12/2024">
          <h4 className="my-0 truncate">Felicity</h4>
          </PageLink>
      </PageGrid>
    </Layout>
  );
}
