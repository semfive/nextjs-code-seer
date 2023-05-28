import Script from 'next/script';
import React from 'react';

const GoogleScript = () => {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-FMJBKLD5KF'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-FMJBKLD5KF');
    `}
      </Script>
    </>
  );
};

export default GoogleScript;
