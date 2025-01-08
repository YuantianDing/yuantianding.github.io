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
    <Layout title={<>The Most Reluctant Convert</>} subtitle={<>Story about C.S. Lewis</>}>
      <Seo/>
      <div className="flex flex-col">
        <div className="textbox"> 
            <h4>Intro: the universe</h4>
            {await generator.gen(<>We can foresee our own death while <b>keenly</b> desiring to go on living.</>)}
            {await generator.gen(<>With just enough happiness to give us an <b>agonized</b> fear of losing it.</>)}
            {await generator.gen(<>And when lost, the <b>poignant</b> misery of remembering how good it felt.</>)}
            {await generator.gen(<>So, if you asked me to believe all this I've just described as a work of an omnipotent, <b>benevolent</b> God.</>)}
            {await generator.gen(<>To direct inference from black to white, from evil flower to <b>virtuous</b> root,</>)}
            {await generator.gen(<>From senseless work to a workman infinitely wise? <b>Staggers</b> belief </>)}

            <h4>C.S. Lewis talk to audience</h4>
            {await generator.gen(<>Had an <b>estranged</b> relationship with my father, that I regret even now </>)}
            {await generator.gen(<>Only to see horribly <b>smashed</b> man, still moving about like crushed beetles. </>)}
            {await generator.gen(<>A mortar shell that wounded me, killed the man next to me, <b>splattering shrapnel</b>, some of which I carried my body to this day.</>)}
            {await generator.gen(<>Were you much frightened in France? All the time, but I never <b>sank so low as</b> to pray. </>)}
            {await generator.gen(<>Father was a <b>solicitor</b> in Belfast, Ireland. </>)}
            {await generator.gen(<>He was Welsh by blood, passionate, <b>rhetorical</b>, laughed and cried a great deal. </>)}
            {await generator.gen(<>Mother was of a cooler rance. She was <b>tranquil</b>, affectionate. </>)}
            {await generator.gen(<>As an experienced traveler <b>goes for the best seat on the train.</b> </>)}

            <h4>Lewis's Childhood Happy Day</h4>
            {await generator.gen(<>Books suitable for a child and books <b>emphatically</b> not. </>)}
            {await generator.gen(<>I almost literally read <b>my way through</b> the house. </>)}
            
            <h4>Mother's Death</h4>
            
            {await generator.gen(<> And as our whole existance changed into something alien and <b>menacing</b>. </>)}
            {await generator.gen(<> The house became full of strange smells, midnight noises, and <b>sinister</b> whispered conversations. </>)}
            {await generator.gen(<> My brother Warnie and I lost our mother gradually as she was slowly withdrawn from our life and the hands of nurses, <b>delirium</b>, and morphea. </>)}
            {await generator.gen(<> My brother Warnie and I lost our mother gradually as she was slowly withdrawn from our life and the hands of nurses, delirium, and <b>morphea</b>. </>)}
            {await generator.gen(<> We were two frightened <b>urchins</b>, huddled for warnth in a bleak world. </>)}
            {await generator.gen(<> Mother's death <b>occationed</b> what some might say at the time, my first religous experience. </>)}
            {await generator.gen(<> When my mother's case was first <b>pronounced</b> hopeless, I remembered what I have been taught. </>)}
            {await generator.gen(<> I set myself to produce in prayer, a firm belief for her recovery. When she died, I <b>shifted ground</b>. </>)}
            {await generator.gen(<> I approached God, not as a savior, but as a magician. I simply wanted himt to restore the <b>status quo</b>.</>)}
            
            <h4>Becoming an Atheist</h4>
            {await generator.gen(<> Mother's death, among other things, produced in me a deeply <b>ingrained</b> pessimism.</>)}
            {await generator.gen(<> The universe <b>in the main</b> was a rather regretable institution.</>)}
            {await generator.gen(<> Father's <b>melancholy</b> was a contributing factor. A prosperous man who my our present tax-ridden standards would be describe as incredibly secure.</>)}
            {await generator.gen(<> Expressed adule life as one <b>unremitting</b> struggle.</>)}
            {await generator.gen(<> Best one to hope for, according to him, was to avoid the <b>workhouse</b>.</>)}
            {await generator.gen(<> This only by extreme <b>exertion</b>. </>)}
            {await generator.gen(<> <b>Temperamental widower</b> still grieving the loss of his wife, must be very wise to raise two noisy school boys, who reserve their confidence only to each other.</>)}
            {await generator.gen(<> The same scene, <b>reenacted</b> time after time.</>)}
            {await generator.gen(<> When he opened his mouth to reprove us, he no doubt intended <b>a short well-chosen appeal</b> to our common sense.</>)}
            {await generator.gen(<> But <b>alas</b>, he had been a public prosecutor (起诉人), long before he becomes a father.</>)}
            {await generator.gen(<> Words came to him, and <b>intoxicated</b> him as they came.</>)}
            {await generator.gen(<> Never, in all my born days, have I come accross such a <b>recalcitrant</b> behavior.</>)}
            {await generator.gen(<> Deliberate disobedience, such as would <b>dismay</b> the very founders of our civilization.</>)}
            {await generator.gen(<> What happened was a small boy who left the bathroom <b>in a pickle</b>, found himself attacked like Cicero on Catiline</>)}
            {await generator.gen(<> <b>Simile</b> on simile, rhetorical question on rhetorical question, the flash of an orator's eye,</>)}
            {await generator.gen(<> The gestures, the <b>cadences</b>, the pauses: The pauses were the chief danger.</>)}
            {await generator.gen(<> One was so long, that my brother, assuming the denunciation to have ended, humbly picked up his book and resumed reading. A gesture which my father, who had only made a rhetorical miscalculation of about a second and a half described as - Cool, <b>premeditated</b>, insolent.</>)}
            {await generator.gen(<> One was so long, that my brother, assuming the denunciation to have ended, humbly picked up his book and resumed reading. A gesture which my father, who had only made a rhetorical miscalculation of about a second and a half described as - Cool, premeditated, <b>insolent</b>.</>)}
            {await generator.gen(<> The disproportion between the <b>tirades</b>, and what prompted them, was ludicrous.</>)}
            {await generator.gen(<> Perhaps I should <b>board up</b> the house.</>)}
            {await generator.gen(<> The career of crime, on which you have both already <b>embarked</b>.</>)}
            {await generator.gen(<> At school all teachers and book editors took it for granted that religion was some sort of <b>endemic</b> nonsense into which humanity tend to blunder</>)}
            {await generator.gen(<> At school all teachers and book editors took it for granted that religion was some sort of endemic nonsense into which humanity tend to <b>blunder</b></>)}
            {await generator.gen(<> What could be more natural to suppose they were animated by spirits and that by singing songs and making sacrifices one might <b>appease</b> him.</>)}
            {await generator.gen(<> A cult <b>sprang up</b> and Christianity began.</>)}
            {await generator.gen(<> Oh, the <b>superstitions</b> always held by the common people.</>)}
            {await generator.gen(<> I was not prepared to believe in a <b>bogey</b> man, who would torture me forever.</>)}
            
            <h4>Temptation, Sexual desires and Lies</h4>
            {await generator.gen(<> I <b>underwent</b> a successful assault of sexual temptation.</>)}
            {await generator.gen(<> The <b>electric</b> effect was a dancing mistress.</>)}
            {await generator.gen(<> I love the smell of <b>bunting</b>. And I was undone.</>)}
            {await generator.gen(<> <b>Dainty toes</b>, very good, Danty toes.</>)}
            {await generator.gen(<> But now I labor hard to become <b>a fop, a cad, and a snob</b>.</>)}
            {await generator.gen(<> I couldn't tell my father my change of belief. He was no fool. He even had <b>a streak of</b> genius.</>)}
            {await generator.gen(<> For a man that is formidable in court and I <b>presume</b> efficient in his office. He has more power for confusing an issue, than any man I have ever known.</>)}
            {await generator.gen(<> Attempted to correct his version produced an <b>incredulous</b>.</>)}
            {await generator.gen(<> I would not have valued a <b>straw</b>, the beauty of the authorized version, the Christian tradition. Oh, it was all sentiment.</>)}
            {await generator.gen(<> I would not have valued a straw, the beauty of the authorized version, the Christian tradition. Oh, it was all <b>sentiment</b>.</>)}
            {await generator.gen(<> And if I tried to make the exact point clear, there would have been a thunder from him and a thin <b>peevish</b> rattle from me, nor could the subject ever have been dropped.</>)}
            {await generator.gen(<> And if I tried to make the exact point clear, there would have been a thunder from him and a thin peevish rattle from me, nor could the subject ever have been <b>dropped</b>.</>)}

            <h4>Lewis's study with his tutor</h4>
            {await generator.gen(<> In a surprisingly short time, this tutor had so rebuilt the ruins of Warnie's education, that he passed into Sandhurst, and recieved a prize army <b>cadetship</b>.</>)}
            {await generator.gen(<> Seeing my brother's progress, I finally <b>plucked up</b> the courage to ask.</>)}
            {await generator.gen(<> I tried to look grave. No other boys, Never to play games. I was <b>transported</b>.</>)}

            <h4>Lewis's study with his tutor</h4>
            {await generator.gen(<> His <b>grip</b> was like iron pincers.</>)}
            {await generator.gen(<> His grip was like <b>iron pincers</b>.</>)}
            {await generator.gen(<> I remember feeling the need of make conversation in the <b>deplorable</b> manner. I felt necessary to use with my father.</>)}
            {await generator.gen(<> As answer after answer was <b>torn into shreds</b>.</>)}
            {await generator.gen(<> Kirk lived with his wife in a confortable and <b>secluded</b> cottage on the edge of the village.</>)}
            {await generator.gen(<> Most boys would have <b>cowered</b> at all this.</>)}
            {await generator.gen(<> Off for a walk by two, not with a friend. Walking and talking are two great pleasures, but it's a mistake to combine them.</>)}
            {await generator.gen(<> Our noise <b>blocks out</b> the sounds and sliences of the outer world.</>)}
            {await generator.gen(<> Work until 7, deep into the classics, not sparing the horses.</>)}
            {await generator.gen(<> Good talk all evening, all chanlleging, <b>brain-rattling</b> stuff.</>)}
            {await generator.gen(<> In bed by 11, unless you are making a night of it, at the pub with your <b>cronies</b>.</>)}
            {await generator.gen(<> Homer first. Oh still <b>relish</b> the brightness and music of it.</>)}
            {await generator.gen(<> Later when I met him, I was <b>awed</b> by his personality and he rejected the whole materialist philosophy out of hand.</>)}
            {await generator.gen(<> A <b>ravenous</b> desire for the supernatural.</>)}
            {await generator.gen(<> Or, to put it <b>bluntly</b>, the occult.</>)}
            {await generator.gen(<> No connection of my atheism <b>swayed</b> me in different moods.</>)}
            {await generator.gen(<> And it was <b>scorned</b> by both the Christian and the rationalists.</>)}
            {await generator.gen(<> Had there been an elder in the neighborhood who <b>dabbled</b> in dirt, oh, they have a nose for potential disciples.</>)}
            
            <h4>Imagination Bapitism</h4>
            {await generator.gen(<> While waiting for the train, I <b>rummaged</b> in the second hand bookstore, and picked out an unusual title: 'Phantastes'.</>)}
            {await generator.gen(<> As I began to read my new book, I was <b>electrified</b>. I felt like a miner who had struck gold.</>)}
            {await generator.gen(<> Oh, if I could only let go, <b>unmake</b> myself.</>)}
            {await generator.gen(<> When my brother brought the <b>lid</b> of a biscuit tin garnished with twigs and flowers to make a toy garden.</>)}
            {await generator.gen(<> When my brother brought the lid of a biscuit tin <b>garnished</b> with twigs and flowers to make a toy garden.</>)}
            {await generator.gen(<> A <b>sensation</b> of desire.</>)}
            
            <h4>Frontline in France</h4>
            {await generator.gen(<> At 18, I arrived at Oxford, the <b>fable</b> cluster of towers and dreaming spires.</>)}
            {await generator.gen(<> Except that night nurse was conducting a <b>furious</b> affair with my roomate.</>)}
            {await generator.gen(<> No, not jokes, still less a tone of <b>flippancy</b>.</>)}
            {await generator.gen(<> Rather, his humor was the <b>bloom</b> of his argument.</>)}
            {await generator.gen(<> I did not have the <b>cynics</b> nose for hypocrisy and smugness so common among my peers.</>)}
            {await generator.gen(<> After my <b>convalescence</b>, I returned to the frontlines.</>)}
            {await generator.gen(<> And I, whoever that may be, cared not two <b>farthings</b>.</>)}
            {await generator.gen(<> It was a <b>ghastly</b> interruption to rational life.</>)}
            
            <h4>Oxford Study</h4>
            {await generator.gen(<> When I returned to Oxford, I put on a new look, which meant to act with the greatest good sense, and to have no more <b>flirtations</b> with the supernatural.</>)}
            {await generator.gen(<> I spent a <b>fortnight</b> with a man I dearly loved, who was going mad.</>)}
            {await generator.gen(<> I held him as he <b>wallowed</b> on the floor and screamed "Devils are tearing me apart."</>)}
            {await generator.gen(<> But I took it as a warning to stay on the <b>beaten</b> track.</>)}
            {await generator.gen(<> Barfield bought up all the <b>abominations</b>.</>)}
            {await generator.gen(<> There is a hopeless <b>discord</b> between what our minds claim to be and what they really must be.</>)}
            {await generator.gen(<> Human reason is merely cognitive maps resulting from natural selection, with random mutations over millions of years to <b>confer</b> on humans a reproductive advantage over other species.</>)}
            {await generator.gen(<> Mind, reason, imagination, consciousness must be more than mere biochemistry. Something <b>further up, further in</b>.</>)}
            {await generator.gen(<> Still it had immense <b>potency</b>.</>)}
            {await generator.gen(<> Within the faculty, I <b>befriended</b> Hugo Dyson.</>)}
            {await generator.gen(<> Oh, these <b>queer</b> people were popping up on every side.</>)}
            {await generator.gen(<> George McDonald had done more to me than any other writer. Of course he had that bee in his <b>bonnet</b> about Christianity.</>)}
            {await generator.gen(<> George McDonald had done more to me than any other writer. Of course he had that bee in his bonnet about Christianity. He is good <b>in spite of</b> it.</>)}
            {await generator.gen(<> My fellow tutor, the hardest <b>boiled</b> atheist I'd ever known.</>)}
            {await generator.gen(<> I was <b>shattered</b>.</>)}
            {await generator.gen(<> Before God <b>closed in on</b> me, I was in fact offered a moment of free choice.</>)}
            {await generator.gen(<> I could <b>unbuckle</b> the armor, or keep it on.</>)}
            {await generator.gen(<> Into my mind, <b>crept</b> a horrible novelty.</>)}
            {await generator.gen(<> What I found <b>appalled</b> me.</>)}
            {await generator.gen(<> <b>Amiable</b> agnostics talk cheerfully of man's search for God.</>)}
            {await generator.gen(<> But no one talked <b>glibly</b> of the comforts of religion.</>)}
            {await generator.gen(<> I knew I would not allow my self to do anything <b>intolerablly</b> painful.</>)}
            {await generator.gen(<> As the dry bones shook in Ezekiel's dreadful valley, the absolute spirit began to stir and <b>heave</b> and throw off its grave clothes.</>)}
            {await generator.gen(<> The steady <b>unrelenting</b> approach of him, whom I so earnestly desired not to meet.</>)}
            {await generator.gen(<> The most <b>dejected</b>, reluctant convert in all England.</>)}
            {await generator.gen(<> I did not then see the divine love that would accept a <b>prodigal</b> on such terms.</>)}
            {await generator.gen(<> His <b>compulsion</b> is my liberation.</>)}
            {await generator.gen(<> I call a line <b>crooked</b>, because I have some idea of a straight line.</>)}
            {await generator.gen(<> And the <b>botheration</b> of it all, the crowds, the notices, the perpetual organizing.</>)}
            {await generator.gen(<> Lighten out darkness, we <b>beseech</b> thee. Oh Lord.</>)}
            {await generator.gen(<> And by thy great mercy defend us from all <b>perils</b> and dangers of this night.</>)}
            {await generator.gen(<> Did not make me a <b>paid-up</b> member in the Church of England.</>)}
            {await generator.gen(<> As for the materialists, their view was <b>out of court</b>.</>)}
            {await generator.gen(<> One day Tolkien and I took a <b>stroll</b> on Addison's walk.</>)}
            {await generator.gen(<> Suddenly a rush of wind interrupted us, <b>startling</b> me.</>)}
            {await generator.gen(<> Full of wisdom and <b>shrewdness</b>.</>)}
            {await generator.gen(<> The overwhelming longings that emerged from 'Phantastes', and my brother's toy garden, were merely <b>signposts</b> to what I truly desired. </>)}
            {await generator.gen(<> We cannot mingle with the <b>splendors</b> we see. </>)}
            {await generator.gen(<> All the leafs of NT <b>rustling</b> with... </>)}
            {await generator.gen(<> A <b>cleft</b> has opened </>)}
        </div>
      </div>
    </Layout>
  );
  return { props: {children}}
}

export default function HomePage({children}: {children: any}) {
  return deserialize(children, {StudyNote, Layout, Seo});
}
