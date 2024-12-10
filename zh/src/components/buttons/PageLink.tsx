import Link from "next/link";
import * as React from 'react';


export default function PageLink({href, children, className, timenote} : {href: string, children: React.ReactNode, className?: string, timenote?: React.ReactNode | string}) {
  const timenote_elem = (timenote)?
    <div className="footnote-size text-indigo-400 max-lg:hidden max-sm:block">{timenote}</div>
    : <></>;
  return <Link href={href}><div className={"doc-box flex flex-cols justify-between items-end cursor-pointe" + className}>
    {children}
    {timenote_elem}
  </div></Link>
}