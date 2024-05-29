import Link from "next/link";

export default function Home() {
  return (
    <div className="home h-full min-h-[70dvh] flex flex-col md:flex-row flex-wrap justify-center items-center py-4">
      <div className="flex-1 flex flex-col justify-end sm:mt-16">
        <h1 className="sm:mt-20 text-3xl md:text-6xl font-bold text-center my-3">Feast Your Eyes</h1>
      </div>
      <div className="flex-1 flex flex-col justify-end h-full items-between p-4 lg:pl-64 lg:ml-16  md:mt-44">
       
      
       <p className="p-4 text-wrap rounded-md bg-black/25 md:bg-slate-50/25 lg:bg-transparent text-center sm:mt-36 font-semibold text-sm text-gray-50  md:text-black shadow-sm  max-w-md">
          On this voyage through my lens, I should hopefully, evoke your
          emotions to appreciate the beauty of our shared human
          experiences from candid portraits to enchanting landscapes. {" "}<br/>
          Explore the <b className="font-bold">who,</b>  <b className="font-bold">what</b>  & <b className="font-bold">where</b>{" "}
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


