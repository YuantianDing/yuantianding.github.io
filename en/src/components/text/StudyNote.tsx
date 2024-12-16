// "use client";

import React, {Component, useState} from 'react'
import fs from 'fs';
import ReactDom from 'react-dom/server';
import { generate_explanation } from '@/lib/openai';

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

export async function StudyNoteGen(note: React.ReactNode, className = "") {
    return <StudyNote className={className}note={note}>{await generate_explanation(note)}</StudyNote>
}
