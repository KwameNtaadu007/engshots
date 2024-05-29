import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/engshotBshape.png"
import NavLinks from "./NavLinks";



export default async function Header() {

  return (
    <div className="top-0 left-0 right-0 bg-slate-300/15 fixed">
        <div className="container flex justify-between items-center mx-auto p-4 md:px-8">
            <Link href='/' className="font-bold underline text-xl" 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:0,scale:1}}
            transition={{duration:0.5}}
            >
              <Image src={logo} alt="engshots" className="w-16 lg:w-32 fixed z-10 top-0"/>
            </Link>
            <NavLinks />
        </div>
    </div>
  )
}
