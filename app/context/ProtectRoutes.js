'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './authContext';
import { usePathname } from 'next/navigation';

const ProtectRoutes = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  let pathname = usePathname()

  useEffect(() => {
    let isDash = pathname.includes('/admin'); 
    let isUpload = pathname.includes('/admin/upload'); 
    if (!user?.email) {
      if(isDash||isUpload)
        return router.push('/'); // Redirect to login page if not authenticated
    }
  }, [user, router,pathname]);

  return children;
};

export default ProtectRoutes;
