import React from 'react';
import SideNav from '@/app/components/SideNav';

export const metadata = {
  title: "upload engshots",
  description: "What I do",
};

export default function Layout ({ children }){
  
  return (
    <div className="flex flex-wrap flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-4">{children}</div>
    </div>
  
  );
};


