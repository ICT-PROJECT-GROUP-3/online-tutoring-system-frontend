import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { status } = useSession();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div>
        {status === 'unauthenticated' ? (
          <Link href="/Auth">Sign In</Link>
        ) : (
          <button
            className="btn btn-secondary"
            onClick={() => signOut({ redirect: false })}
          >
            Sign Out
          </button>
        )}
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
