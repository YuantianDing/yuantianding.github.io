import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';
import PageLink from '@/components/buttons/PageLink';

export default function HomePage() {
  return (
    <Layout title={<>忏悔录</>} title_dist='6rem'>
      <Seo/>
      <h2 className='pl-5'>精神随想</h2>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-flow-row gap-3 md:gap-7'>
        <PageLink href="posts/on_destination" timenote="12/2024">
          <h4 className="my-0 truncate">论决心</h4>
        </PageLink>
      </div>

      <h2 className='pl-5 mt-20'>画廊</h2>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-flow-row gap-3 md:gap-7 '>
        <PageLink href="images/Psalms21.png" timenote="11/2024">
          <h4 className="my-0 truncate">圣咏 二十一</h4>
        </PageLink>
        <PageLink href="images/Psalms16.png" timenote="11/2024">
          <h4 className="my-0 truncate">圣咏 十六</h4>
        </PageLink>
        <PageLink href="images/Psalms130.png" timenote="11/2024">
          <h4 className="my-0 truncate">圣咏 一百三十</h4>
        </PageLink>
        <PageLink href="images/KaramazovVI3.png" timenote="11/2024">
          <h4 className="my-0 truncate p-size">卡拉马佐夫兄弟 第六卷</h4>
        </PageLink>
        <PageLink href="images/Creed.png" timenote="11/2024">
          <h4 className="my-0 truncate">信经</h4>
        </PageLink>
        <PageLink href="images/Beatitudes.png" timenote="11/2024">
          <h4 className="my-0 truncate">真福颂</h4>
        </PageLink>
      </div>
    </Layout>
  );
}
