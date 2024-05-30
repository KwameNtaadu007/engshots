import React from 'react';
import SideNav from '../components/SideNav';

export const metadata = {
  title: "upload engshots",
  description: "What I do",
};

export default function Layout ({ children }){
  
  return (
    <div className="flex flex-wrap flex-col md:overflow-hidden">
      <div className="w-full flex ">
        <SideNav />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto">{children}</div>
    </div>
  
  );
};


