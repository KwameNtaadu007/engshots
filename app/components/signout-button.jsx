import { signOut } from "next-auth/react"
import { Button } from "./button"
import { useRouter } from 'next/navigation';
 
export function SignOut() {
  const router = useRouter();
  const handleLogout=()=>{
    signOut()
    return router.push('/');
  }
  return <Button onClick={handleLogout}>Signout</Button>
}