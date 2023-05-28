import '@/styles/globals.scss';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import Providers from '@/components/common/Providers';
import Script from 'next/script';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ReactFlowProvider>
        <Providers>
          <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
        </Providers>
      </ReactFlowProvider>
      <Script
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
    
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>
    </>
  );
}
