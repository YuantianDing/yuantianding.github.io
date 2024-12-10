import * as React from 'react';


export default function QuoteBlock({children, reference, className} : {children: React.ReactNode, reference?: React.ReactNode | string, className?: string}) {
  const refblock = reference?
    <div className='footnote-size text-zinc-500'>{reference}</div> : <></>;
  return <div className={"pl-8 py-[1px] my-[1px] border-l-2 border-indigo-400 " + className}>
    {children}
    {refblock}
  </div>
}