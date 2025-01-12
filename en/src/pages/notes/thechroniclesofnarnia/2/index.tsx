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
            <h3>Lucy and the Wardrobe</h3>
            {await generator.gen(<>sent away from London</>)}
            {await generator.gen(<>air-raids</>)}
            {await generator.gen(<>shaggy white hair</>)}
            {await generator.gen(<>so odd-looking that</>)}
            {await generator.gen(<>keep on pretending he was blowing his nose to hide it</>)}
            {await generator.gen(<>said good night to the Professor</>)}
            {await generator.gen(<>go upstairs on the first night</>)}
            {await generator.gen(<>all talked it over</>)}
            {await generator.gen(<>We've fallen on our feet and no mistake</>)}
            {await generator.gen(<>This is going to be <b>perfectly splendid</b></>)}
            {await generator.gen(<>Peter: That <b>old chap</b> will let us do anything we like.</>)}
            {await generator.gen(<>Susan: I think he's an <b>old dear</b></>)}
            {await generator.gen(<>Edmund: Oh, <b>come off</b> it.</>)}
            {await generator.gen(<>who was tired and pretending not to be tired.</>)}
            {await generator.gen(<>Don't <b>go on</b> talking like that</>)}
            {await generator.gen(<>Lucy: There's sure to be a <b>row</b> if we're heard talking here.</>)}
            {await generator.gen(<>those long passages and rows of doors leading into empty rooms</>)}
            {await generator.gen(<>make her feel a little creepy.</>)}
            {await generator.gen(<>stags</>)}
            {await generator.gen(<>But when the next morning came there was a steady rain falling, so thick that...</>)}
            {await generator.gen(<>They were upstairs in the room he had <b>set apart</b> for them</>)}
            {await generator.gen(<>a long, low room with two windows <b>looking out</b> in one direction and two in another</>)}
            {await generator.gen(<>Do stop <b>grumbling</b>, Ed.</>)}
            {await generator.gen(<>There's a <b>wireless</b></>)}
            {await generator.gen(<>It was sort of the house, that you never seem to <b>come to the end of</b></>)}
            {await generator.gen(<>The first few doors they tried, <b>led only into</b> spare bedrooms</>)}
            {await generator.gen(<>a door that <b>led out</b> onto a balcony</>)}
            {await generator.gen(<>balcony</>)}
            {await generator.gen(<>rooms were <b>lined with</b> books</>)}
            {await generator.gen(<>window-sill</>)}
            {await generator.gen(<>they all trooped out again</>)}
            {await generator.gen(<>stepped into the wardrobe and <b>got in among the coats</b> and rubbed her face against them</>)}
            {await generator.gen(<>leave the door open ... knew it's foolish to <b>shut oneself into</b> any wardrobe.</>)}
            {await generator.gen(<><b>stretch her arm out</b> in front of her</>)}
            {await generator.gen(<>so as not to <b>bump her face into</b> the back of the wardrobe</>)}
            {await generator.gen(<>always expecting to feel woodwork against --</>)}
            {await generator.gen(<>the tips of fingers</>)}
            {await generator.gen(<>push the soft folds of the coats aside</>)}
            {await generator.gen(<>something <b>crunching</b> under her feet</>)}
            {await generator.gen(<>powdery</>)}
            {await generator.gen(<>something prickly - branches of trees</>)}
            {await generator.gen(<>snowflakes falling through the air</>)}
            {await generator.gen(<>inquisitive</>)}
            {await generator.gen(<>She <b>looked back over</b> her shoulder</>)}
            {await generator.gen(<>the open doorway of</>)}
            {await generator.gen(<>lamp-post</>)}
            {await generator.gen(<>a very strange person <b>stepped out</b> from among the trees</>)}
            {await generator.gen(<><b>carried over</b> his head an umbrella</>)}
            {await generator.gen(<>waist</>)}
            {await generator.gen(<>glossy</>)}
            {await generator.gen(<>hoofs</>)}
            {await generator.gen(<>His tail is neatly <b>caught up over</b> the arm that held the umbrella</>)}
            {await generator.gen(<>so as to keep it from <b>trailing</b> in the snow</>)}
            {await generator.gen(<>woollen muffler</>)}
            {await generator.gen(<>reddish</>)}
            {await generator.gen(<>brown-paper parcels</>)}

            <h3></h3>
        </div>
      </div>
    </Layout>
  );
  generator.allnotes_file();
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
