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
            <h3>American Idioms for Business</h3>
            
            {await generator.gen(<>shout-out</>)}
            {await generator.gen(<>my right-hand man</>)}
            {await generator.gen(<>going the extra mile</>)}
            {await generator.gen(<>think outside the box</>)}
            {await generator.gen(<>buy in</>)}
            {await generator.gen(<>on boarding</>)}
            {await generator.gen(<>kick off</>)}
            {await generator.gen(<>get the ball rolling</>)}
            {await generator.gen(<>icebreaker</>)}
            {await generator.gen(<>touch base</>)}
            {await generator.gen(<>orientation</>)}
            {await generator.gen(<>coined the term</>)}
            {await generator.gen(<>the perfect pitch (business term)</>)}
            {await generator.gen(<>kingpin</>)}
            {await generator.gen(<>caffeinated</>)}
            {await generator.gen(<>top-notch</>)}
            {await generator.gen(<>eye-catching</>)}
            {await generator.gen(<>tie it all together</>)}
            {await generator.gen(<>Yankee</>)}
            {await generator.gen(<>ingenuity</>)}
            {await generator.gen(<>stroke him chin</>)}
            {await generator.gen(<>momentum</>)}
            {await generator.gen(<>epiphany</>)}
            {await generator.gen(<>jumps in</>)}
            {await generator.gen(<>concur</>)}
            {await generator.gen(<>home run</>)}
            {await generator.gen(<>hit it out the park</>)}
            {await generator.gen(<>miss a beat</>)}
            {await generator.gen(<>Crunch the numbers</>)}
            {await generator.gen(<>Elevator Pitch</>)}
            {await generator.gen(<>Peel the Onion</>)}
            {await generator.gen(<>foster</>)}
            {await generator.gen(<>foster parents</>)}
            {await generator.gen(<>See the forest and not just the trees.</>)}
            {await generator.gen(<>brevity</>)}
            {await generator.gen(<>analyses</>)}
            {await generator.gen(<>dissect</>)}
            {await generator.gen(<>greater than the sum of the parts</>)}
            {await generator.gen(<>make it back</>)}
            {await generator.gen(<>transfer it over to</>)}
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
