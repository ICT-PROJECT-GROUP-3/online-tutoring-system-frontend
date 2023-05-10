// import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loader } from '../components/shared/Loader';
import { useAuth } from '../lib/services/firebase/auth';

export default function Home() {
  const router = useRouter();
  const { authUser, isLoading, signOut } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push('/Auth');
    }
  });

  return !authUser ? (
    <Loader />
  ) : (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div>
        {/* {status === 'unauthenticated' ? ( */}
        <Link href="/Auth">Sign In</Link>
        {/* ) : ( */}
        <button
          className="btn btn-secondary bg-blue-500 p-4 text-white"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        {/* )} */}
        <Link href="/tutor_profile">See Tutor</Link>
      </div>
    </main>
  );
}
// <div>

//     <button
//       className="btn btn-secondary"
//       onClick={() => signOut({ redirect: false })}
//     >
//       Sign Out
//     </button>

//     <div>
//       <Link className="btn mx-3 btn-secondary" href={'/auth/login'}>
//         Sign In
//       </Link>
//       <Link className="btn mx-3" href={'/auth/register'}>
//         Sign Up
//       </Link>
//     </div>
// </div>;
