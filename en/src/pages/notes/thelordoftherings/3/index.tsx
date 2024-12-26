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
    <Layout title={<>The Return of the King</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">
            <p>On destroied Isengard</p>
            {await generator.gen(<>The <b>filth</b> of Saruman is washing away.</>)}
            <p>Pippin see Sauron</p>
            {await generator.gen(<>Why should we <b>ride to the aid</b> to those who did not come to ours?</>)}
            {await generator.gen(<>Things are now <b>in motion</b> and cannot be undone.</>)}
            <p>Minas Trith</p>
            {await generator.gen(<>Lord Denethor, however, is not the king. He is a <b>steward</b> only.</>)}
            {await generator.gen(<>I come with <b>tiding</b> in this dark hour, and with counsel.</>)}
            {await generator.gen(<>Yet for all your <b>subtleties</b>, you have not wisdom.</>)}
            {await generator.gen(<>And with your right, you'd seek to <b>supplant</b> me.</>)}
            {await generator.gen(<>I will not bow with this Ranger from the North, last of a ragged house long <b>bereft</b> of lordship.</>)}
            {await generator.gen(<>Pippin: I don't want to be in a battle. But <b>waiting on the edge of</b> one I can't escape is even worse.</>)}

            <p>Preparing the way to Minas Trith</p>
            
            {await generator.gen(<>Theodore: It is a three day <b>gallop</b> to Minas Trith</>)}
            
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
