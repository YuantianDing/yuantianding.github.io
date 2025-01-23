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
    <Layout title={<>Daily Note</>}>
      <Seo/>
      <div className="flex flex-col items-center">
        <div className="textbox">
            <p>Getting into good condition:</p>
            
            {await generator.gen(<>get into mode</>)}

            <p>Surrender to the world:</p>
            {await generator.gen(<>bend to it</>)}
            
            <p>Refuse advisor's requests:</p>
            {await generator.gen(<>I have another commitment</>)}
            
            <p>Meet Jordan randomly:</p>
            {await generator.gen(<>bump into</>)}
        </div>
        <audio className="py-3" src={generator.get_mp3_address()} controls={true}></audio>
      </div>
    </Layout>
  );
  generator.allnotes_file();
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
