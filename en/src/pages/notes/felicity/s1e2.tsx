// "use client";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudyNote, { StudyNoteGen } from '@/components/text/StudyNote';
import { serialize, deserialize } from '@/lib/react-serialize';

export const getStaticProps = async (ctx: any) => {
  // console.log(a);
  const children = serialize(
    <Layout title={<>Felicity S1E2</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">
            {await StudyNoteGen(<>Noel: I'm a sensitive guy. I have a question  for everyone ... Don't <b>blow this out of proportion</b>.</>)}
            {await StudyNoteGen(<>Noel: I'm a sensitive guy.... I <b>have a crush on everyone</b>.</>)}
            {await StudyNoteGen(<>Noel: I'm a sensitive guy... It was more like an <b>power trip</b> kind of thing.</>)}
            {await StudyNoteGen(<>Felicity's Father: We are here because we try to understand why you are so <b>adamant about</b> New York.</>)}
            {await StudyNoteGen(<b>in mint condition</b>)}
            {await StudyNoteGen(<b>freak out</b>)}
            {await StudyNoteGen(<>So we'll <b>take a rain check</b> on that dance.</>)}
            {await StudyNoteGen(<b>Pass out</b>)}
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
