import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout title={<>关于本站</>}>
      <Seo/>
      <div className="textbox">
        <p>
          Github 个人笔记，暂时<Link href="https://clustrmaps.com/site/1c33u">还没人看</Link>。 <a href="https://yuantianding.github.io/about">（英文个人信息）</a>
        </p>

        <h4>本站采用的字体</h4>

        <ul className='note-size'>
          <li>思源宋体 Source Han Serif: <a href="licenses/sourcehanserif.txt">LICENSE</a></li>
          <li>马善政毛笔楷书: <a href="licenses/mashanzheng.txt">LICENSE</a></li>
        </ul>

        
      </div>
    </Layout>
  );
}
