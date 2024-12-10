import Header from '@/components/layout/Header';
import * as React from 'react';

export default function Layout({ children, title, title_dist, subtitle }: { title: React.ReactNode, children: React.ReactNode, title_dist?: string, subtitle?: React.ReactNode }) {
  const subtitle_div = (subtitle)? (
    <div className="subtitle-size mx-auto text-center pt-6 text-indigo-400" style={{height: title_dist ?? '9rem'}}>
      {subtitle}
    </div>
  ): <div style={{height: title_dist ?? '9rem'}}></div>;
  return <div className="bg-color text-white">
    <div>
      <Header />

      <section className="min-h-screen f-times">
        <div className="grid grid-row-6 items-center justify-center py-12 content-stretch">
            <div style={{height: '5vh', width: '80vw'}}></div> 
            <span className="title-size mx-auto text-center text-white" style={{transform: 'scale(1.0, 1)'}}> {title} </span> 
            {subtitle_div}
            <div className="items-center justify-center px-3">
              <div className="max-w-6xl center-box">
                {children}
              </div>
            </div>
        </div>
      </section>
    </div>
  </div>;
}
