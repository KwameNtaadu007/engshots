import React from 'react';
import Header from '@/components/Header';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'engshots',
  description: 'A photographic voyage with ENG',
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en" className='sroll'>
      <body className={`${nunito.className} `}>
        <Header />
        <main className="
        mt-12
        flex min-h-[91dvh] 
        flex-col items-center 
        mx-auto
        max-w-[960px]
        p-4">
        {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
