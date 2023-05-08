import { useSession, signIn, signOut } from 'next-auth/react';

export default function Protected() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Protected</h1>
        <p>This is a protected route</p>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Protected</h1>
      <p>You need to be signed in to view this page</p>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
