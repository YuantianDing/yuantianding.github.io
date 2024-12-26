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
    <h2 className='pl-5 mt-14'>The Lord of the Rings Trilogy</h2>
    <PageGrid>
        <PageLink href="thelordoftherings/1" timenote="12/2024">
        <h4 className="my-0 truncate">The Fellowship of the Rings</h4>
        </PageLink>
        <PageLink href="thelordoftherings/2" timenote="12/2024">
        <h4 className="my-0 truncate">The Two Towers</h4>
        </PageLink>
        <PageLink href="thelordoftherings/3" timenote="12/2024">
        <h4 className="my-0 truncate">The Returns of the King</h4>
        </PageLink>
    </PageGrid>
  </div>
</Layout>;
}
