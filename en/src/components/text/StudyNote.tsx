// "use client";

import React, {Component, useState} from 'react'
import fs from 'fs';
import ReactDom from 'react-dom/server';
import { generate_explanation, getTitle } from '@/lib/openai';
import reactToText from 'react-to-text';
import { basename } from 'path';

export default function StudyNote({note, children, className}: {note: React.ReactNode, children: React.ReactNode, className?: string}) {
    const [open, setOpen] = useState(false);
    return(
        <div className={"flex flex-row items-start " + className}>
              <span className="mat-icons-sharp mr-3 text-5xl mt-[5px] text-color-highlight hover:cursor-pointer" onClick={_ => setOpen(!open)}>speaker_notes</span>
              <div>
              <div><p className="text-white">{note}</p></div>
              {open && 
              <div>
                <hr className="border-color-highlight grow"/>
                {children}
              </div>
            }
              </div>
        </div>
        );
}

export class StudyNoteGen {
  dirname: string;
  notes: React.ReactNode[] = [];
  constructor(dirname: string) {
    this.dirname = dirname.replace('.next/server', 'src').replace('.js', '')
    this.notes = [];
  }
  async gen(note: React.ReactNode, className = "") {
      this.notes.push(note);
      return <StudyNote className={className}note={note}>{await generate_explanation(this.dirname, note)}</StudyNote>
  }
  async allnotes_file() {
    const filename = this.dirname + '/_allnotes.md';
    fs.writeFileSync(filename, this.notes.map(a => reactToText(a)).join('\n\n'));
    
    const map = new Set();
    for(const note of this.notes) {
      const title = getTitle(ReactDom.renderToStaticMarkup(note));
      map.add(title + '.md');
    }

    const files = await fs.globSync(this.dirname + '/*.md');
    for(const file of files) {
      if(basename(file).startsWith('_')) {continue;}
      if(!map.has(basename(file))) {
        console.log('deleting', file);
        fs.unlinkSync(file);
      }
    }
  }
  get_mp3_address(): string {
    return "https://github.com/YuantianDing/yuantianding.github.io/raw/refs/heads/main/en/src/" + this.dirname.split("/src/")[1] + "/_allnotes.mp3";
  }
}
