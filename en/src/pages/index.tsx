import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PercentageCircle from '@/components/PercentageCircle';
import Link from 'next/link';
import Button from '@/components/buttons/Button';

export default function HomePage() {
  return (
    <Layout title={<>About Me</>} innerWidth='74rem'>
      <Seo templateTitle='About Me'/>
      <div className="textbox center-box font-serif-md">
        <p>I'm Yuantian Ding, a third-year PhD student at Purdue University specializing in program synthesis and verification under the supervision of <a href="https://engineering.purdue.edu/~xqiu/"> Prof. Xiaokang Qiu</a>. My recent research is focused on empowering LLM-based code generation with traditional program synthesis technologies. I have also worked with Zhiqiang Zuo, and Harry Xu on compiler systems. </p>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">school</span> Education</h1>

        <div className="flex flex-row content-start sm:mt-10">
            <img alt="PU" src="/images/purdue_university_logo.jpeg" className="rounded-lg w-16 h-16 mx-5 flex-none  max-sm:hidden"></img>
            <div className="flex flex-col font-serif-lg">
                <span className="footnote-size text-color-highlight">2022 - Present</span>
                <span className="h2-size pb-1 tracking-wide"><span className='font-bold text-white'>Purdue University</span></span>
            </div>
        </div>
        <div className="flex flex-row content-start sm:mb-10">
            <div className="rounded-lg w-16 h-16 mx-5 flex-none max-sm:hidden" style={{visibility: 'hidden'}}></div>
            <ul className="ml-7 mt-1 p-size list-disc pl-0">
                <li><span>Ph.D. Electrical and Computer Engineering</span></li>
                <li> Advised by <a href="https://engineering.purdue.edu/~xqiu/">Xiaokang Qiu</a></li>
            </ul>
        </div>
        <div className="flex flex-row content-start sm:mt-10">
            <img alt="USTC" src="/images/ustc_logo.png" className="bg-black rounded-lg w-16 h-16 mx-5 flex-none  max-sm:hidden"></img>
            <div className="flex flex-col font-serif-lg">
                <span className="footnote-size text-color-highlight">2018 - 2022</span>
                <span className="h2-size pb-1 tracking-wide"><span className='font-bold text-white'>University of Science and Technology of China</span></span>
            </div>
        </div>
        <div className="flex flex-row content-start sm:mb-10">
            <div className="rounded-lg w-16 h-16 mx-5 flex-none  max-sm:hidden" style={{visibility: 'hidden'}}></div>
            <ul className="ml-7 mt-1 p-size list-disc pl-0">
                <li>B.E. in Computer Science and Technology</li>
                <li>GPA: 3.97/4.3 (Ranked 6/251)</li>
            </ul>
        </div>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">library_books</span> Publication</h1>

        <div className="p-size sm:my-10 max-sm:my-5">
            <strong>Enhanced Enumeration of Techniques for Syntax-Guided Synthesis of Bit-Vector
                Manipulations.</strong>
            {/* <a className="text-color-highlight" href="https://engineering.purdue.edu/~xqiu/"></a> */}
            <div>Yuantian Ding, Xiaokang Qiu.</div>
            <div>(POPL '24) <em>Proc. 51st ACM SIGPLAN Symposium on Principles of Programming Languages.</em> </div>
            <div className="footnote-size tracking-tight">
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/popl2024.pdf"><span
                        className="mat-icons-sharp">description</span>PDF</a>
                <a className="mr-1" href="https://doi.org/10.1145/3632913"><span
                        className="mat-icons-sharp">open_in_new</span>DOI</a>
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth"><span
                        className="mat-symbol-sharp">code_blocks</span>CODE</a>
                <a className="mr-1" href="https://www.youtube.com/watch?v=lbDxCZ7wh80"><span
                        className="mat-icons-sharp">videocam</span>TALK</a>
            </div>
        </div>

        <div className="p-size sm:my-10 max-sm:my-5">
            <strong>A Concurrent Approach to String Transformation Synthesis.</strong>
            {/* <a className="text-color-highlight" href="https://engineering.purdue.edu/~xqiu/"></a> */}
            <div>Yuantian Ding, Xiaokang Qiu.</div>
            <div>(PLDI '25) <em>Proc. 46th ACM SIGPLAN Conference on Programming Language Design and Implementation.</em> </div>
            <div className="footnote-size tracking-tight">
                <a className="mr-1" href="uploads/PLDI_2025.pdf"><span className="mat-icons-sharp">description</span>PDF</a>
                {/* <a className="mr-1" href="#"><span className="mat-icons-sharp">open_in_new</span>DOI</a> */}
                <a className="mr-1" href="https://github.com/YuantianDing/Synthphonia"><span className="mat-symbol-sharp">code_blocks</span>CODE</a>
                <a className="mr-1" href="https://github.com/YuantianDing/Synthphonia/blob/main/docs/artifact.md"><span className="mat-symbol-sharp">box</span>ARTIFACT</a>
                {/* <a className="mr-1" href="#"><span className="mat-icons-sharp">videocam</span>TALK</a> */}
            </div>
        </div>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">business_center</span> Experience</h1>

        <div className="flex flex-col">
            <span className="footnote-size text-color-highlight">02/2025 - Present</span>
            <strong className="p-size pb-1 font-serif-md">SuperINTRO | Conversational AI Full-Stack Engineer Intern</strong>
        </div>
        <ul className="flex-none ml-7 mt-1 list-disc text-xl p-size">
            <li>Working on AI agents and RAG models using leading LLM frameworks (OpenAI API and Langchain).</li>
            <li>Apply prompt engineering techniques for AI models to improve the relevance and accuracy of responses.</li>
        </ul>


        <div className="flex flex-col mt-8">
            <span className="footnote-size text-color-highlight">07/2021 - 12/2021</span>
            <strong className="p-size pb-1 font-serif-md">Nanjing University Research Internship</strong>
        </div>
        <ul className="flex-none ml-7 mt-1 list-disc text-xl p-size">
            <li>with <a href="https://z-zhiqiang.github.io/">Zhiqiang Zuo</a>, <a
                    href="https://web.cs.ucla.edu/~harryxu/">Harry Xu</a></li>
            <li>Topic: <Link className='text-color-highlight' href="/about/jfass">A New Serverless Platform with Customized JIT Design</Link></li>
        </ul>

        <div className="flex flex-col mt-8">
            <span className="footnote-size text-color-highlight">07/2021 - 12/2021</span>
            <strong className="p-size pb-1 font-serif-md">SRI SSFT24 | The 13th Summer School on Formal Techniques</strong>
        </div>
        <ul className="flex-none ml-7 mt-1 list-disc text-xl p-size">
            <li>Summer school for learning techniques based on formal logic. <a className="mr-1"
                    href="https://fm.csl.sri.com/SSFT24/">(website)</a></li>
        </ul>

        <h1 className="ml-1"><span className="mat-symbol-sharp mr-3">diamond</span> Projects</h1>

        <div className="p-size sm:my-8 max-sm:my-3">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">DryadSynth</strong> <span className="p-size">Dryad Synthesizer for SyGuS competition</span></div>
            <div>A SyGuS solver designed by Purdue CAP, under active development.</div>
            <div className="footnote-size tracking-tight">
                <a className="mr-1"
                    href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/pldi2020.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>PDF</a>
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>
        <div className="p-size sm:my-8 max-sm:my-3">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">Oomotion</strong> <span className="p-size">A textobject-oriented editor plugin for VS Code </span></div>
            <div>A editing keymap inspired by Vim, Kakoune and Helix. Able to edit code based on text-objects like words, lines, code blocks, etc. With tree-sitter and easy-motion support.</div>
            <div className="footnote-size tracking-tight">
                <a className="mr-1"
                    href="ahttps://marketplace.visualstudio.com/items?itemName=yuantiand.oomotion-vscode"><span
                        className="mat-icons-sharp">open_in_new</span>SITE</a>
                <a className="mr-1" href="https://github.com/YuantianDing/oomotion_vscode"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>

        <div className="p-size sm:my-8 max-sm:my-3">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">TheoryComboViz</strong> <span className="p-size">Polite theory combination visualizer</span></div>
            <div>A visualizer for <a href="https://link.springer.com/chapter/10.1007/11559306_3">polite theory combination</a>, demonstrated using Sets, intended to make SMT solvers easier to understand. </div>
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
        <div className="p-size sm:my-8 max-sm:my-3">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">HilbertProver</strong> <span className="p-size">A prover for Hilbert system</span></div>
            <div>An Automatic Theorem Prover for <a href="https://en.wikipedia.org/wiki/Hilbert_system">Hilbert System</a>, generating nearly-minimal proofs, with some interesting optimizations.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://github.com/YuantianDing/HibertProver/blob/master/test_results.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>EXAMPLES</a>
                <a className="mr-1" href="https://github.com/YuantianDing/HibertProver"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>
        <div className="p-size sm:my-8 max-sm:my-3">
            <div><strong className="pr-3 mr-1 border-r border-zinc-300">Chital</strong> <span className="p-size">A secure container runtime implemented in Rust</span></div>
            <div>Course project for my operating system course. Leading 3 other students in a group.</div>
            <div className="footnote-size tracking-tight mt-[1px]">
                <a className="mr-1"
                    href="https://github.com/OSH-2020/x-chital/blob/master/docs/conclusion/conclusion.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>PDF</a>
                <a className="mr-1" href="https://github.com/OSH-2020/x-chital/tree/master"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </div>
        </div>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">emoji_events</span> <span className='tracking-tighter'>Aw</span>ards</h1>

        <p className="sm:my-5"><strong className="text-bf pr-3 mr-1 border-r border-zinc-300">ASC Student Supercomputer Challenge</strong> <span className="pr-3 mr-1 border-r">2021</span> First Prize
        <br/> Topic (My Part): Efficient Parallelization of <a href="https://github.com/scottransom/presto">PRESTO</a>
        </p>
        <p className="sm:my-5"><strong className="text-bf pr-3 mr-1 border-r border-zinc-300">ACM-China International Parallel Computing Challenge</strong> <span className="pr-3 mr-1 border-r">2020</span> Third Prize
        <br/> Topic (Final): Efficient Numerical Simulation of <a href="/uploads/数值方法.pdf">Supersonic Underexpanded Thermal Jets</a>
        </p>

        <h1 className="ml-1"><span className="mat-symbol-sharp mr-3">swords</span> Skills</h1>
        <div className="flex flex-row row justify-evenly my-10">
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16 " stroke_width={2} percentage={60}>60%</PercentageCircle>
                <span className="p-size text-center">C++</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={80}>80%</PercentageCircle>
                <span className="p-size text-center">Rust</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={70}>70%</PercentageCircle>
                <span className="p-size text-center">Typescript</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={50}>50%</PercentageCircle>
                <span className="p-size text-center">Java</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={50}>50%</PercentageCircle>
                <span className="p-size text-center">Scala</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={90}>90%</PercentageCircle>
                <span className="p-size text-center">Python</span>
            </div>
        </div>
        <h1 className="ml-1"><span className="mat-symbol-sharp mr-3">sailing</span> Hobbies</h1>

        <p className="sm:my-5"><strong className="text-bf pr-3 mr-1 border-r border-zinc-300">Chanting</strong> Favorite Piece: <a href="https://musescore.com/user/33379492/scores/7390607">Cherubic Hymn (Kastorsky)</a></p>
        <p className="sm:my-5"><strong className="text-bf pr-3 mr-1 border-r border-zinc-300">Playing <a href="https://en.wikipedia.org/wiki/Erhu">Erhu</a></strong> Favorite Piece: <a href="https://en.wikipedia.org/wiki/Abing">Erquan Yingyue</a> </p>
      </div>
      {/* <p className='text-center mt-4 text-base font-sans text-zinc-500'> Download my <Link href="/uploads/Resume.pdf">Resume</Link> for more information.</p> */}
    </Layout>
  );
}

