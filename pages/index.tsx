import About from '../components/pagecomponents/home_page/About';
import Contact from '../components/pagecomponents/home_page/Contact';
import Features from '../components/pagecomponents/home_page/Features';
import Hero from '../components/pagecomponents/home_page/Hero';
import NewsLetter from '../components/pagecomponents/home_page/Newsletter';
import Team from '../components/pagecomponents/home_page/Team';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-between p-24 `}
    >
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <NewsLetter />
    </main>
  );
}
//  <div>
//    {/* {status === 'unauthenticated' ? ( */}
//    <Link href="/Auth">Sign In</Link>
//    {/* ) : ( */}
//
//      Sign Out
//    </button>
//    {/* )} */}
//    <Link href="/tutor_profile">See Tutor</Link>
//  </div>;
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
