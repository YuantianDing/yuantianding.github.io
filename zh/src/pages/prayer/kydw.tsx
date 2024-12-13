import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import QuoteBlock from '@/components/text/QuoteBlock';

export default function HomePage() {
  return (
    <Layout title={<>克欲祷文</>} subtitle={<>拙译自英文</>}>
      <Seo/>
      <div className="textbox font-bold text-white">
        
        <p>
        君宰、主、我的上帝啊，掌管我命运的主宰：求您以您丰厚的仁慈帮助我，不要让我因自己的过犯而灭亡，也不要让我置肉欲于灵性之上。
        </p>

        <p>
        求您怜爱您的造物，不要忽视您亲手所造的化工。不要转脸不顾我！求您开恩怜悯，不要羞辱我，也不要将我弃绝于死地。
        </p>

        <p>
        因为我这个无依无靠的罪人，只能投奔于您。上帝啊，我的护主，求您医治我的灵魂，因为我得罪了您；求您因您的仁慈拯救我，因为我自幼便依附于您。
        </p>

        <p>
        愿我这个试图敬畏您的人，不因不洁的行为、不合宜的思想、和无益的回忆而蒙羞；求您使一切污秽和邪恶远离我。
        </p>

        <p>
        因为唯有您的名全能、至圣、永垂不朽，统宰万物。您必将您超凡的大能赐予那些奋力对抗邪恶势力的人。 因为国度、权柄、荣耀都归于您，父、子及圣灵，自今至永远，及于万世！阿门。
        </p>

      </div>
    </Layout>
  );
}
