import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout title={<>Serverless Platform with Customized JIT Design</>} title_dist={'16px'}>
      <Seo/>
      <div className="flex flex-col items-center">
        <img src="/images/jit.png" className="w-5/6 h-auto m-16" />
        <div className="textbox">
          <p>Faas (Function as a service) is one form of serverless computing where users only need to deploy function on the cloud and the cloud service vendor will handle all the hardware resources the function needs. The vendor will provide runtimes for these functions which are driven by events. However, Faas is tailored for short-lived functions which makes traditional runtime optimizations such as JIT compilation fail to enhance performance. We want to design a new framework to bridge the gap between modern language runtime and serverless platforms.</p>
          <p>In this project, we aim at building a new serverless platform tailored for JVM runtime with profile information sharing and native code sharing across nodes. We also hope to use hardware tracing technology to help reduce profiling overhead from interpreter stage.</p>
          <p>I stopped working on this after working with Xiaokang. Here is the previous status: <a href="/uploads/JITRelocation.pdf">Implementation Report</a></p>
        </div>
      </div>
    </Layout>
  );
}
