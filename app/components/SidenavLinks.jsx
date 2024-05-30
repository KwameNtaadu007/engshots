"use client"
import {
  HomeIcon,
  DocumentDuplicateIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'dashboard',
    href: '/admin',
    icon: DocumentDuplicateIcon,
  },
  { name: 'upload', href: '/admin/upload', icon: CloudArrowUpIcon },
];

export default function SidenavLinks() {
  const pathname = usePathname(); 
  return (
    <>
      {links.map((link) => { 
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex flex-wrap h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-secondary/10 hover:text-secondary lg:flex-none lg:justify-start lg:p-2 lg:px-3',
              {
                'bg-text-secondary/10 text-secondary': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
