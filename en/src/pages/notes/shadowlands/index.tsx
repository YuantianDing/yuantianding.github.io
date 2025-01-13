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
    <Layout title={<>The Shadowlands</>}>
      <Seo/>
      <div className="flex flex-col items-center">
        <div className="textbox">
            {await generator.gen(<>the <b>bluff</b> common-man's language</>)}
            {await generator.gen(<>I don't believe you heard a word of it.</>)}
            {await generator.gen(<>Shouldn't I have said that I've not been married?</>)}
            {await generator.gen(<>Not at all. It was a <b>personal touch</b>.</>)}
            {await generator.gen(<>You shouldn't play that card to often,</>)}
            {await generator.gen(<>You'll end up the non-playing captain in the <b>cricket game</b> of life.</>)}
            {await generator.gen(<>a <b>card-carrying</b> communist</>)}
            {await generator.gen(<>Am I right you are as fascinated as I am </>)}
            {await generator.gen(<>the mythical door that leads out of time and space into</>)}
            {await generator.gen(<>Maybe you are, <b>for that matter</b>.</>)}
            {await generator.gen(<>enclose (envelope)</>)}
            {await generator.gen(<>write me off as a nut</>)}
            {await generator.gen(<>start the morning with</>)}
            {await generator.gen(<>Pictures do not tax the brain, they say.</>)}
            {await generator.gen(<>Walking a little aimlessly --</>)}
            {await generator.gen(<>beside a river</>)}
            {await generator.gen(<>a garden <b>enclose by a high wall</b></>)}
            {await generator.gen(<>Inside the fountain, <b>lie</b>...</>)}
            {await generator.gen(<>one beautiful rosebud</>)}
            {await generator.gen(<>be filled with longing for</>)}
            {await generator.gen(<><b>stretch out</b> one hand</>)}
            {await generator.gen(<>pluck the bud</>)}
            {await generator.gen(<>pleasant plains</>)}
            {await generator.gen(<>price of fame</>)}
            {await generator.gen(<>she is <b>presumptuous</b></>)}
            {await generator.gen(<>Americans don't understand about <b>inhibition</b>.</>)}
            {await generator.gen(<>I amused that</>)}
            {await generator.gen(<>wish fulfillment</>)}
            {await generator.gen(<>like our real world, by which we <b>set such store</b> </>)}
        </div>
        <audio className="py-3 mt-5" src={generator.get_mp3_address()} controls={true}></audio>
      </div>
    </Layout>
  );
  generator.allnotes_file();
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
