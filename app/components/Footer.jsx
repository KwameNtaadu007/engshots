'use client';

import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { logOut } from '../lib/actions';
import { useAuth } from '../context/authContext';


export default function Footer() {
    const {user}=useAuth(); 
    return (
        <footer className='w-full flex justify-end px-4 fixed bottom-0'>
            {user?.email ? (<Button onClick={() => logOut()} className='text-black bg-gray-200 '>logout</Button>):(<Link href="/login" >login</Link> )}
        </footer>
    )
}
