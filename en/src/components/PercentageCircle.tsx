import * as React from 'react';


export default function PercentageCircle({ className, stroke_width, percentage, children }: { className?: string, stroke_width: number, percentage: number, children: React.ReactNode }) {
  return (
    <div className={(className ?? "") + " relative"}>
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth={stroke_width}>
          </circle>
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-indigo-500" strokeWidth={stroke_width + 1}
              strokeDasharray="100" strokeDashoffset={100-percentage} strokeLinecap="round"></circle>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center font-strong text-indigo-500">{children}</span>
      </div>
    </div>
  );
}
