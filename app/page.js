import Link from "next/link";

export default function Home() {
  return (
    <div className="home h-full flex flex-col sm:mt-4 md:flex-row flex-wrap justify-center items-center py-4">
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-center my-3">Feast Your Eyes</h1>
      </div>
      <div className="flex-1 flex flex-col h-full items-between p-4 lg:pl-64 lg:ml-16 mt-[50%] md:mt-44">
       
        <p className="text-center font-light text-sm text-gray-50  md:text-gray-900  max-w-md">
          On this voyage through my lens, I should hopefully, evoke your
          emotions to appreciate the beauty of our shared human
          experiences from candid portraits to enchanting landscapes, {" "}
          explore the Who, What  & Where?{" "}
          around us.
        </p>
        <Link
          href={"/gallery"}
          className="mx-auto sm:mt-10 py-4 px-8 bg-red-500 hover:bg-red-400 text-white rounded-md w-48 mt-2 md:mt-4 text-center"
        >
          Explore
        </Link>
        
        
      </div>
    </div>
  );
}


