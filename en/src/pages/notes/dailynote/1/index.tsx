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

            <p>Team Meeting:</p>
            {await generator.gen(<>hop on</>)}
            {await generator.gen(<>out and about</>)}
            {await generator.gen(<>get your feet wet</>)}
            {await generator.gen(<>dive right in</>)}
            {await generator.gen(<>upscale</>)}
            {await generator.gen(<>sketchy</>)}
            {await generator.gen(<>wonky</>)}
            <p>Business:</p>
            {await generator.gen(<>niceties</>)}
            {await generator.gen(<>cross-check</>)}
            {await generator.gen(<>give credit where credit is due</>)}
            {await generator.gen(<>Clinch the deal</>)}
            {await generator.gen(<>What's the big deal</>)}
            {await generator.gen(<>What's the deal</>)}
            {await generator.gen(<>a side gig</>)}
            {await generator.gen(<>a side hustle</>)}
            {await generator.gen(<>deliver the goods</>)}
            {await generator.gen(<>a handshake is my word</>)}
            {await generator.gen(<>a joint effort</>)}
            {await generator.gen(<>a botch job</>)}
            {await generator.gen(<>a bang-up job</>)}
            {await generator.gen(<>Micromanage</>)}
            {await generator.gen(<>Belabor the point</>)}
            {await generator.gen(<>a labor of love</>)}
            {await generator.gen(<>a new lease of live</>)}
            {await generator.gen(<>In the market for</>)}
            {await generator.gen(<>On the market</>)}
            {await generator.gen(<>priced out of the market</>)}
            {await generator.gen(<>Cut out the middle man</>)}
            {await generator.gen(<>get something for nothing out</>)}
            {await generator.gen(<>Own it</>)}
            {await generator.gen(<>above my pay grade</>)}
            {await generator.gen(<>go according to plan</>)}
            {await generator.gen(<>quick and dirty</>)}
            
            <p>SuperIntro:</p>
            {await generator.gen(<>knock out the task</>)}
            {await generator.gen(<>get up and going</>)}
            {await generator.gen(<>jump into any issues come up</>)}
            {await generator.gen(<>a bit of a stretch</>)}
            {await generator.gen(<>touch base</>)}
            {await generator.gen(<>speculate</>)}
            {await generator.gen(<>stay at the head of the curve</>)}
            {await generator.gen(<>putting that out there</>)}
            {await generator.gen(<>open format</>)}
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
