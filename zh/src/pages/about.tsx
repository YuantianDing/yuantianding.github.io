import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <Layout title={<>关于本站</>}>
      <Seo/>
      <div className="textbox">
        <p>
          个人博客，无聊打发时间，暂时还没人看。 <a href="https://yuantianding.github.io/about">（英文个人信息）</a>
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
