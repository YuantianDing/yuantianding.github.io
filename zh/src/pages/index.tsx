import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';
import PageLink from '@/components/buttons/PageLink';
import PageGrid from '@/components/text/PageGrid';

export default function HomePage() {
  return (
    <Layout title={<>忏悔录</>}>
      <Seo/>
      <div className="private-content">
      <h2 className='pl-5'>精神随想</h2>
      <div className='pb-10'>
      <PageGrid>
        <PageLink href="posts/on_destination" timenote="12/2024">
          <h4 className="my-0 truncate">关于决心</h4>
        </PageLink>
      </PageGrid>
      </div>
      </div>

      <h2 className='pl-5 '>画廊</h2>
      <PageGrid>
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
      </PageGrid>
    </Layout>
  );
}
