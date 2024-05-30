
import LoginForm from '../..//components/login-form';
import Image from 'next/image';
import logo from '../../assets/engshotsShape.png'
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-[85vh] ">
      <div className="mx-auto flex w-full max-w-[450px] flex-col space-y-2.5 p-4 ">
        <div className="flex w-full items-center justify-center rounded-lg bg-black p-3">
          <div className="w-32 text-white md:w-36 flex items-center justify-center">
           <Image src={logo} alt='engshots' className='h-16 w-16'/>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}