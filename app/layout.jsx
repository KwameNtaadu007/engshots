import React from 'react';
import Header from '@/app/components/Header';
import { nunito } from './components/fonts/fonts';
import './globals.css';

import Footer from './components/Footer';
import { AuthProvider } from './context/authContext';
import ProtectRoutes from './context/ProtectRoutes';



export const metadata = {
  title: 'engshots',
  description: 'A photographic voyage with ENG',
};
<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />

const RootLayout = async ({ children }) => {

  return (
    <html lang="en" className='sroll'>
      <body className={`${nunito.className}`}>
        <AuthProvider>
          <ProtectRoutes>
            <Header />
            <main className="mt-[8%] flex  flex-col mx-auto max-w-[1380px] p-4">
              {children}
            </main>
            <Footer />
          </ProtectRoutes>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
