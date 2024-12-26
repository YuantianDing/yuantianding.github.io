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
    <Layout title={<>The Two Towers</>} subtitle={<>English Study Notes</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox">
          <p>Eat with Sam</p>
          {await generator.gen(<>Frodo: Nothing ever <b>dampens</b> your spirits, does it, Sam? </>)}
          {await generator.gen(<>Frodo: The rings is <b>treacherous</b>. It will hold you to your words. </>)}
          <p>In the forest</p>
          {await generator.gen(<>The air is so <b>close</b> here. </>)}
          <p>Gandalf meets the king</p>
          {await generator.gen(<>Gandalf: Keep your <b>forked tongue</b> behind your teeth. </>)}
          {await generator.gen(<>Gandalf: I have not passed through fire and death to <b>bandy crooked words</b> with a witless worm</>)}
          {await generator.gen(<>Gandalf: I have not passed through fire and death to bandy crooked words with a <b>witless worm</b></>)}
          {await generator.gen(<>King: Your leechcraft would have had me crawling <b>on all fours</b> like a beast</>)}
          {await generator.gen(<>King's Daughter: to stay behind the bar until use and old age accept them</>)}
          
          <p>Gollom catching the fish</p>
          
          {await generator.gen(<>Sam: There's <b>naught</b> left in him but lies and deceit.</>)}

          <p>Arwen tell the story</p>
          {await generator.gen(<>Frodo begin to understand the quest will <b>claim</b> his life</>)}
          {await generator.gen(<>In the <b>gathering</b> dark, the will of the Ring grow strong.</>)}
          
          <p>Frodo see Faramir</p>
          
          {await generator.gen(<>Frodo (talking about Gollom): This creature is <b>bound to</b> me, he is our guide</>)}
          
          <p> Aragorn got back </p>
          {await generator.gen(<>You are the luckiest, canniest and the most <b>reckless</b> man I ever know</>)}

        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
