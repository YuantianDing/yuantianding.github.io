// "use client";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudyNote, { StudyNoteGen } from '@/components/text/StudyNote';
import { serialize, deserialize } from '@/lib/react-serialize';

export const getStaticProps = async (ctx: any) => {
  console.log(__filename);
  const generator = new StudyNoteGen(__filename);
  const children = serialize(
    <Layout title={<>Felicity S1E2</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">
            {await generator.gen(<>Noel: I'm a sensitive guy. I have a question  for everyone ... Don't <b>blow this out of proportion</b>.</>)}
            {await generator.gen(<>Noel: I'm a sensitive guy.... I <b>have a crush on everyone</b>.</>)}
            {await generator.gen(<>Noel: I'm a sensitive guy... It was more like an <b>power trip</b> kind of thing.</>)}
            {await generator.gen(<>Felicity's Father: We are here because we try to understand why you are so <b>adamant about</b> New York.</>)}
            {await generator.gen(<b>in mint condition</b>)}
            {await generator.gen(<b>freak out</b>)}
            {await generator.gen(<>So we'll <b>take a rain check</b> on that dance.</>)}
            {await generator.gen(<b>Pass out</b>)}
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
