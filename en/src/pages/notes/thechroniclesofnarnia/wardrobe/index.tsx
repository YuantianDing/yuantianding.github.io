// "use client";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudyNote, { StudyNoteGen } from '@/components/text/StudyNote';
import { serialize, deserialize } from '@/lib/react-serialize';
import PageGrid from '@/components/text/PageGrid';
import PageLink from '@/components/buttons/PageLink';

export default function HomePage({children}: {children: any}) {
  return <Layout title={<>The Lord of the Rings</>} subtitle={<>English Study Notes</>}>
  <Seo/>
  <div className="flex flex-col">
    <h2 className='pl-5 mt-14'>The Lion, the Witch, and the Wardrobe</h2>
    <PageGrid>
        <PageLink href="wardrobe/1" timenote="12/2024">
        <h4 className="my-0 truncate">Chapter 1</h4>
        </PageLink>
    </PageGrid>
  </div>
    </Layout>;
}