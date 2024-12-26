import * as React from 'react';


export default function PageGrid({children, className} : {children: React.ReactNode, reference?: React.ReactNode | string, className?: string}) {
  return <div className={'grid grid-cols-2 max-sm:grid-cols-1 grid-flow-row gap-3 md:gap-7 ' + className}>
    {children}
  </div>
}