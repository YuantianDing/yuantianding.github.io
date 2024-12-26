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
    <Layout title={<>The Fellowship of the Rings</>} subtitle={<>English Study Notes</>}>
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
            {await generator.gen(<>If you're refer to the incident with the dragon, I was barely involved. All of I do is give your uncle <b>a little nudge out of</b> the door.</>)}

            <p>Gandalf Meet with Bilbo</p>

            {await generator.gen(<>Bilbo: Old wine... it was <b>laid down</b> by my father.</>)}
            {await generator.gen(<>He is very <b>fond of</b> you. </>)}
            {await generator.gen(<>I feel thin, sort of <b>sratched</b>, like butter <b>scraped over</b> too much bread.</>)}
            
            <p>Bilbo's Birthday Party</p>

            {await generator.gen(<>Bilbo: How they're going to cook us. Whether it be <b>turned on a spit</b>,</>)}
            {await generator.gen(<>Bilbo: or whether they should sit on us one by one, and <b>squash us into jelly</b>. </>)}
            
            <p>Bilbo's speech</p>

            {await generator.gen(<>Bilbo: I'm going now. I bid you all a very fond farewell. </>)}

            <p>Burning the Ring</p>
            {await generator.gen(<>Gandalf: The language is that of Mordor, which I will not <b>utter</b> here. </>)}

            <p>A Great Eye</p>
            {await generator.gen(<>a great eye <b>lidless</b>, wreathed in flame. </>)}
            {await generator.gen(<>a great eye lidless, <b>wreathed</b> in flame. </>)}
            {await generator.gen(<>They are not all <b>accounted for</b>, the lost seeing stones. </>)}
            {await generator.gen(<>You do not seriously think a hobbit could <b>contend with</b> the will of Sauron? There are none who can</>)}

            <p>Frobo got healed</p>
            {await generator.gen(<>Sam: seeing as how you are <b>on the mend</b>, we'd be off soon. </>)}
            {await generator.gen(<>Gandalf(talking about Sarumen): His <b>treachery</b> runs deeper than you know. </>)}

            <p>In the snow storm on the road</p>
            {await generator.gen(<>Elf: There is a <b>fell voice</b> on the air.</>)}
            
            <p>The Elves' Wood</p>
            
            {await generator.gen(<>Its banner caught high in the <b>morning breeze</b>. </>)}
            {await generator.gen(<>Sarumen talk to the Beast: Taken by the dark powers, tortured and <b>mutilated</b>. </>)}
            
            <p>Discussing Routes</p>
            
            {await generator.gen(<> Just a simple matter of finding our way through Emyn Muil. An impassable labyrinth of <b>razor-sharp</b> rocks. </>)}
            {await generator.gen(<> After that, it gets even better, '<b>Festering, stinking marshland</b>' as far as the eye can see. </>)}
            {await generator.gen(<> Recovering Strength? <b>Pay no heed</b> to that, young hobbit. </>)}
            {await generator.gen(<> I ask only for the strength to defend my people. If you would but lend me the Ring. Why do you <b>recoil</b>, I am no thief. </>)}
        

            
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
