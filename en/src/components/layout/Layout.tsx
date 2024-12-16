import Header from '@/components/layout/Header';
import * as React from 'react';

export default function Layout({ children, title, title_dist, subtitle, innerWidth }: { title: React.ReactNode, children: React.ReactNode, title_dist?: string, subtitle?: React.ReactNode, innerWidth?: string }) {
  const subtitle_div = (subtitle)? (
    <div className="subtitle-size mx-auto text-center pt-6 text-color-highlight" style={{height: title_dist ?? '9rem'}}>
      {subtitle}
    </div>
  ): <div style={{height: title_dist ?? '7rem'}}></div>;
  innerWidth = innerWidth ?? '72rem';

  return <div className="bg-color text-white">
    <div>
      <Header />

      <section className="min-h-screen f-times bg-color">
        <div className="grid grid-row-6 items-center justify-center py-12 content-stretch">
            <div style={{height: '4vh', width: '90vw'}}></div> 
            <span className="title-size mx-auto text-center text-white" style={{transform: 'scale(1.0, 1)'}}> {title} </span> 
            {subtitle_div}
            <div className="items-center justify-center px-3">
              <div className="center-box p-size f-pt-serif mb-1.5" style={{maxWidth: innerWidth}}>
                {children}
              </div>
            </div>
        </div>
      </section>
    </div>
  </div>;
}
