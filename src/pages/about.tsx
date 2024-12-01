import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PercentageCircle from '@/components/PercentageCircle';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout title={<>About Me</>}>
      <Seo templateTitle='About Me'/>
      <div className="textbox center-box">
        <p>Hi! I'm Yuantian Ding, a third-year PhD student at Purdue University. I am working on program synthesis with
            <a href="https://engineering.purdue.edu/~xqiu/">Prof. Xiaokang Qiu</a>. Currently, I'm focus on
            syntax-guided synthesis and quantum circuit synthesis.</p>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">school</span> Education</h1>

        <div className="flex flex-row content-start mt-10">
            <img alt="PU" src="/images/purdue_university_logo.jpeg" className="rounded-lg w-16 h-16 mx-5 flex-none"></img>
            <div className="flex flex-col">
                <span className="text-lg text-indigo-400">2022 - Present</span>
                <span className="text-bf text-3xl pb-1">Purdue University</span>
            </div>
        </div>
        <div className="flex flex-row content-start mb-10">
            <div className="rounded-lg w-16 h-16 mx-5 flex-none" style={{visibility: 'hidden'}}></div>
            <ul className="flex-none ml-7 mt-1 list-disc">
                <li>Ph.D. Electrical and Computer Engineering</li>
                <li> Advised by <a href="https://engineering.purdue.edu/~xqiu/">Xiaokang Qiu</a></li>
                <li>GPA: 3.91/4.00</li>
            </ul>
        </div>
        <div className="flex flex-row content-start mt-10">
            <img alt="USTC" src="/images/ustc_logo.png" className="bg-black rounded-lg w-16 h-16 mx-5 flex-none"></img>
            <div className="flex flex-col">
                <span className="text-lg text-indigo-400">2018 - 2022</span>
                <span className="text-bf text-3xl pb-1">University of Science and Technology of China</span>
            </div>
        </div>
        <div className="flex flex-row content-start mb-10">
            <div className="rounded-lg w-16 h-16 mx-5 flex-none" style={{visibility: 'hidden'}}></div>
            <ul className="flex-none ml-7 mt-1 list-disc">
                <li>B.E. in Computer Science and Technology</li>
                <li>GPA: 3.97/4.3 (Ranked 6/251)</li>
            </ul>
        </div>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">library_books</span> Publication</h1>

        <ul className="p-size my-10">
            <li className="text-bf">Enhanced Enumeration of Techniques for Syntax-Guided Synthesis of Bit-Vector
                Manipulations.</li>
            {/* <a className="text-indigo-400" href="https://engineering.purdue.edu/~xqiu/"></a> */}
            <li>Yuantian Ding, Xiaokang Qiu.</li>
            <li>(POPL '24) <em>Proc. 51st ACM SIGPLAN Symposium on Principles of Programming Languages.</em> </li>
            <li className="text-lg tracking-tight">
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/popl2024.pdf"><span
                        className="mat-icons-sharp">description</span>PDF</a>
                <a className="mr-1" href="https://doi.org/10.1145/3632913"><span
                        className="mat-icons-sharp">open_in_new</span>DOI</a>
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
                <a className="mr-1" href="https://www.youtube.com/watch?v=lbDxCZ7wh80"><span
                        className="mat-icons-sharp">videocam</span>TALK</a>
            </li>
        </ul>

        <ul className="p-size my-10">
            <li className="text-bf">A Concurrent Approach to String Transformation Synthesis.</li>
            {/* <a className="text-indigo-400" href="https://engineering.purdue.edu/~xqiu/"></a> */}
            <li>WORKING IN PROGRESS</li>
            {/* <li>(POPL '24) <em>Proc. 51st ACM SIGPLAN Symposium on Principles of Programming Languages.</em> </li> */}
            <li className="text-lg tracking-tight">
                <a className="mr-1" href="#"><span className="mat-icons-sharp">description</span>PDF</a>
                {/* <a className="mr-1" href="#"><span className="mat-icons-sharp">open_in_new</span>DOI</a> */}
                <a className="mr-1" href="#"><span className="mat-icons-sharp">data_object</span>CODE</a>
                {/* <a className="mr-1" href="#"><span className="mat-icons-sharp">videocam</span>TALK</a> */}
            </li>
        </ul>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">business_center</span> Experience</h1>

        <div className="flex flex-col">
            <span className="text-lg text-indigo-400">07/2021 - 12/2021</span>
            <span className="text-bf text-2xl pb-1">Nanjing University Research Internship</span>
        </div>
        <ul className="flex-none ml-7 mt-1 list-disc text-xl p-size">
            <li>with <a href="https://z-zhiqiang.github.io/">Zhiqiang Zuo</a>, <a
                    href="https://web.cs.ucla.edu/~harryxu/">Harry Xu</a></li>
            <li>Topic: <Link className='text-indigo-400' href="/about/jfass">A New Serverless Platform with Customized JIT Design</Link></li>
        </ul>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">integration_instructions</span> Projects</h1>

        <ul className="p-size my-8">
            <li><span className="text-bf pr-3 mr-1 border-r border-zinc-300">DryadSynth</span> <span className="text-2xl">Dryad Synthesizer for SyGuS competition</span></li>
            <li>A SyGuS solver designed by Purdue CAP, under active development.</li>
            <li className="text-lg tracking-tight">
                <a className="mr-1"
                    href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/pldi2020.pdf"><span
                        className="mat-icons-sharp">open_in_new</span>PDF</a>
                <a className="mr-1" href="https://github.com/purdue-cap/DryadSynth"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </li>
        </ul>
        <ul className="p-size my-8">
            <li><span className="text-bf pr-3 mr-1 border-r border-zinc-300">Oomotion</span> <span className="text-2xl">A textobject-oriented editor plugin for VS Code </span></li>
            <li>An editor inspired by Vim, Kakoune and Helix. With tree-sitter and easy-motion support.</li>
            <li className="text-lg tracking-tight">
                <a className="mr-1"
                    href="https://marketplace.visualstudio.com/items?itemName=yuantiand.oomotion-vscode"><span
                        className="mat-icons-sharp">open_in_new</span>SITE</a>
                <a className="mr-1" href="https://github.com/YuantianDing/oomotion_vscode"><span
                        className="mat-icons-sharp">data_object</span>CODE</a>
            </li>
        </ul>

        <h1 className="ml-1"><span className="mat-icons-sharp mr-3">perm_contact_calendar</span> Skills</h1>
        <div className="flex flex-row row justify-evenly my-10">
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={50}>50%</PercentageCircle>
                <span className="p-size text-center">C++</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={70}>70%</PercentageCircle>
                <span className="p-size text-center">Rust</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={50}>50%</PercentageCircle>
                <span className="p-size text-center">Scala</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={90}>90%</PercentageCircle>
                <span className="p-size text-center">Python</span>
            </div>
            <div className="flex flex-col items-center">
                <PercentageCircle className="text-xl size-16" stroke_width={2} percentage={70}>70%</PercentageCircle>
                <span className="p-size text-center">Typescript</span>
            </div>
        </div>
      </div>
    </Layout>
  );
}

