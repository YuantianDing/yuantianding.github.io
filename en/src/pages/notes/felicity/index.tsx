// "use client";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudyNote, { StudyNoteGen } from '@/components/text/StudyNote';
import { serialize, deserialize } from '@/lib/react-serialize';
import PageGrid from '@/components/text/PageGrid';
import PageLink from '@/components/buttons/PageLink';

export default function HomePage({children}: {children: any}) {
  return <Layout title={<>Felicity</>} subtitle={<>English Study Notes</>}>
  <Seo/>
  <div className="flex flex-col">
    <h2 className='pl-5 mt-14'>Season 1</h2>
    <PageGrid>
        <PageLink href="felicity/s1e2" timenote="12/2024">
        <h4 className="my-0 truncate">Episode 2</h4>
        </PageLink>
    </PageGrid>
  </div>
</Layout>;
}
