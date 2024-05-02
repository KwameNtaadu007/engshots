"use client"
import Link from "next/link"
import {motion} from 'framer-motion'
import { useState } from "react"



export default function SideNav() {
    const [opened, setOpened] =useState(false)

    const variants={
        opened:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:'spring',
                stiffness:20,
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",

            }
        }
    }

    const navOptions =[
        {title:'Home',href:'/home'},
        {title:'About',href:'/about'},
        {title:'Gallery',href:'/gallery'},
    ]
  return (
    <motion.div initial='hidden' animate={opened? 'opened':'closed'} variants={variants} className="fixed top-0 left-0 bottom-0 w-[400px]">
        
        {navOptions.map((nav)=>(
                <Link href={nav.href} key={nav.title+Math.random()}>{nav.title}</Link>
            ))}
        
    </motion.div>
  )
}
