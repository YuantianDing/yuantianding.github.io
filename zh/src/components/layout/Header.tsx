import * as React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav flex flex-row row py-3 mb-6 w-full border-gray-300 dark:border-gray-700 justify-between text-xl" >
        <div>
          <div className="pl-10 py-2 my-auto">
              <Link className="font-bold pr-5 mr-3 border-r text-white max-md:border-r-0" href="/"> Yuantian Ding </Link>
              <Link className="no-underline px-4 py-3 text-white rounded hover:bg-gray-200 dark:hover:bg-gray-800 max-md:hidden lg:inline" href="/">文章</Link>
              <Link className="no-underline px-4 py-3 text-white rounded hover:bg-gray-200 dark:hover:bg-gray-800 max-md:hidden lg:inline" href="/">杂记</Link>
              <Link className="no-underline px-4 py-3 text-white rounded hover:bg-gray-200 dark:hover:bg-gray-800 max-md:hidden lg:inline" href="https://yuantianding.github.io/about">关于</Link>
          </div>
        </div>
        <div className="pr-6 pt-2px mt-1">
          <span className="mx-2 my-3 pt-4"> <Link className="text-xl text-white" href="https://www.linkedin.com/in/yuantian-ding-60627933b/"> <i className="mt-1 fab fa-linkedin-in"></i> </Link></span>
          <span className="mx-2 my-3 pt-4"> <Link className="text-xl text-white" href="https://github.com/YuantianDing"> <i className="mt-1 fab fa-github"></i> </Link></span>
          <span className="mx-2 my-3 pt-4"> <Link className="text-xl text-white" href="https://orcid.org/0009-0008-9941-6394"> <i className="mt-1 fab fa-orcid"></i> </Link></span>
          <span className="mx-2 my-3 pt-4"> <Link className="text-xl text-white" href="https://yuantianding.github.io"> <i className="mt-1 mat-icons-sharp">translate</i></Link></span>
        </div>
      </header>
  );
}
