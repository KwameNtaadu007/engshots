import Link from "next/link";

export default function NotFound(){
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Page not found</h2>
          <p className="text-gray-300">Could not find the requested resource</p>
          <Link href='/home' className="my-4">Go Home</Link>
      </div>
    )
  }
  