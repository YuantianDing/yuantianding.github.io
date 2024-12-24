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
    <Layout title={<>Lord of the Rings</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">

            <p>The wierd creature, Gollom, got the ring.</p>

            {await generator.gen(<>Darkness <b>crept</b> back into the forests of the world. </>)}
            {await generator.gen(<>Rumors grew <b>of</b> a shadow in the East. Whispers of a nameless fear. </>)}
            {await generator.gen(<>And the ring of power <b>perceived</b>... it's time now come. </>)}

            <p>Villiage Life</p>
            {await generator.gen(<>The wizard tell the boy: How is the old <b>rascal</b>?</>)}
            {await generator.gen(<>Answerd: you know Bilbo, He's got the whole place in an <b>uproar</b>.</>)}
            
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
