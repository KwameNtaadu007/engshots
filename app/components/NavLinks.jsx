'use client';

import Link from 'next/link';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useAuth } from '../context/authContext';


export default function NavLinks() {
   const {user}=useAuth();

    return (
        <div className="flex items-center gap-2 ">
            <Link href='/gallery' className="hover:text-secondary mr-4">gallery</Link>
            {user? <Link href='/admin' className="hover:text-secondary mr-4">admin</Link> : null}
            <Link href='https://twitter.com/KwameNtaadu' className="hover:text-secondary"><FaXTwitter /></Link>
            <Link href='https://instagram.com/Kwame_Ntaadu' className="hover:text-secondary"><FaInstagram /></Link>
        </div>
    );
}
