import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const PrivateRoute = ({ children }: any) => {
  const router = useRouter();

  const user = useUser();
  console.log(user);
  useEffect(() => {
    if (user === null) router.push('/login');
  }, [router, user]);

  return <>{children}</>;
};

export default PrivateRoute;
