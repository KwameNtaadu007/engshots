import { Nunito,Lusitana } from 'next/font/google';


const nunito = Nunito({ subsets: ['latin'], display: 'swap' });
const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],});

export {nunito,lusitana}
