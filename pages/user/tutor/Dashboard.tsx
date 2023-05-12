import React, { useEffect } from 'react'
import PageWrapper from '../../../components/shared/PageWrapper'
import { useRouter } from 'next/router';
import { useAuth } from '../../../lib/services/firebase/auth';

const Dashboard = () => {

    const router = useRouter();
    const { authUser, isLoading, signOut } = useAuth();
    useEffect(() => {
      if (!isLoading && !authUser) {
        router.push('/');
      }
    });

  return (
    <PageWrapper>
    <div className="flex flex-col items-center justify-center min-h-screen  py-5 mx-4 pt-5 sm:pt-0 sm:mx-2">
    <div>Dashboard</div>
    <button
              className="btn btn-secondary bg-blue-500 p-4 text-white"
              onClick={() => signOut()}
            >
              {' '}
              log out
            </button>
    </div>
    </PageWrapper>
  )
}

export default Dashboard