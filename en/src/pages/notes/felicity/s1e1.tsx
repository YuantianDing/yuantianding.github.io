// "use client";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudyNote, { StudyNoteGen } from '@/components/text/StudyNote';
import { serialize, deserialize } from '@/lib/react-serialize';

export const getStaticProps = async (ctx: any) => {
  const a = await StudyNoteGen(<>Noel: I'm a sensitive guy. I have a question  for everyone ... Don't <b>blow this out of proportion</b>.</>);
  // console.log(a);
  const children = serialize(
    <Layout title={<>Felicity S1E1</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">
            <p>This episode is about the life of lorem ipsum.</p>
            {a}
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
