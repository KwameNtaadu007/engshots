import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/assets/engshotBshape.png"

export default function Header() {
  return (
    <div className="top-0 left-0 right-0 fixed">
        <div className="container flex justify-between items-center mx-auto p-4 md:px-8">
            <Link href='/' className="font-bold underline text-xl" 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:0,scale:1}}
            transition={{duration:0.5}}
            >
              <Image src={logo} alt="engshots" className="w-16 lg:w-48 fixed z-10 top-0"/>
            </Link>
            <div className="flex items-center gap-2 text-xl ">
              <Link href='gallery' className="hover:text-secondary mr-4">Gallery</Link>
              <Link href='https://twitter.com/KwameNtaadu' className="hover:text-secondary"><FaXTwitter /></Link>
              <Link href='https://instagram.com/Kwame_Ntaadu' className="hover:text-secondary"><FaInstagram /></Link>
            </div>
        </div>
    </div>
  )
}
