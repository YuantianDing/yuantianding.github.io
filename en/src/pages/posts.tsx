import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PageGrid from '@/components/text/PageGrid';
import PageLink from '@/components/buttons/PageLink';

export default function HomePage() {
  return (
    <Layout title={<>Yuantian's Blog</>}>
      <Seo/>
      <h1 className='ml-4 mt-14'>Projects</h1>
        <div className="p-size sm:mb-8 max-sm:my-3 textbox md:px-7">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">DryadSynth</strong> <span className="p-size">Dryad Synthesizer for SyGuS competition</span></div>
            <div>A SyGuS solver designed by Purdue CAP, under active development.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/pldi2020.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>PDF</a>
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>
        <div className="p-size sm:my-8 max-sm:my-3 textbox md:px-7">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">Oomotion</strong> <span className="p-size">A textobject-oriented editor plugin for VS Code </span></div>
            <div>An editor inspired by Vim, Kakoune and Helix. With tree-sitter and easy-motion support.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://marketplace.visualstudio.com/items?itemName=yuantiand.oomotion-vscode"><span
                        className="mat-icons-sharp">open_in_new</span>SITE</a>
                <a className="mr-1" href="https://github.com/YuantianDing/oomotion_vscode"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>
        <div className="p-size sm:my-8 max-sm:my-3 textbox md:px-7">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">TheoryComboViz</strong> <span className="p-size">Polite theory combination visualizer</span></div>
            <div>A visualizer for <a href="https://link.springer.com/chapter/10.1007/11559306_3">polite theory combination</a>, demonstrated using Sets. Theory combination is implemented extensively in SMT solvers, which are used for fields such as formal program verification, automated reasoning, and software testing.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://docs.google.com/presentation/d/1lR_ZgWF3qUQmqB5BKtot7045xPKbSlKUDN402SvpBiM/edit?usp=sharing"><span
                        className="mat-icons-sharp">description</span>SLIDES</a>
                <a className="mr-1" href="https://github.com/vivCoding/theory-combo-viz"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
                <a className="mr-1" href="https://theory-combo-viz.vercel.app/"><span
                        className="mat-icons-sharp">open_in_new</span>DEMO</a>
            </div>
        </div>
        <div className="p-size sm:my-8 max-sm:my-3 textbox md:px-7">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">HilbertProver</strong> <span className="p-size">A prover for Hilbert system</span></div>
            <div>An Automatic Theorem Prover for <a href="https://en.wikipedia.org/wiki/Hilbert_system">Hilbert System</a>, generating nearly-minimal proofs, with some interesting optimizations.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://github.com/YuantianDing/HibertProver/blob/master/test_results.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>PDF</a>
                <a className="mr-1" href="https://github.com/YuantianDing/HibertProver"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>
      <h1 className='ml-4 mt-14'>English Notes</h1>
      <PageGrid>
          <PageLink href="notes/felicity" timenote="12/2024">
          <p className="my-0 truncate">Felicity</p>
          </PageLink>
          <PageLink href="notes/thelordoftherings" timenote="12/2024">
          <p className="my-0 truncate">The Lord of The Rings</p>
          </PageLink>
          <PageLink href="notes/themostreluctantconvert" timenote="01/2025">
          <p className="my-0 truncate">The Most Reluctant Convert</p>
          </PageLink>
          <PageLink href="notes/thechroniclesofnarnia" timenote="01/2025">
          <p className="my-0 truncate">The Chronicles of Narnia</p>
          </PageLink>
          <PageLink href="notes/shadowlands" timenote="01/2025">
          <p className="my-0 truncate">The Shadowlands</p>
          </PageLink>
      </PageGrid>
    </Layout>
  );
}
