import Header from '@/components/layout/Header';
import * as React from 'react';

export default function Layout({ children, title, title_dist }: { title: React.ReactNode, children: React.ReactNode, title_dist?: string }) {
  return <div className="bg-zinc-900 text-white">
    <div>
      <Header />

      <section className="min-h-screen f-times">
        <div className="grid grid-row-6 items-center justify-center py-12 content-stretch">
            <div style={{height: '4vh', width: '90vw'}}></div> 
            <span className="text-6xl font-bold mx-auto text-center text-zinc-100" style={{transform: 'scale(1.0, 1)'}}> {title} </span> 
            <div style={{height: title_dist ?? '7rem'}}></div>
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
