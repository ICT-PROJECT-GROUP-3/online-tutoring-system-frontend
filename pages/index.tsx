import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import About from '../components/pagecomponents/home_page/About';
import Contact from '../components/pagecomponents/home_page/Contact';
import Features from '../components/pagecomponents/home_page/Features';
import Hero from '../components/pagecomponents/home_page/Hero';
import NewsLetter from '../components/pagecomponents/home_page/Newsletter';
import Team from '../components/pagecomponents/home_page/Team';
import Navbar from '../components/shared/navbar/Navbar';

const Home = () => {
  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation('home');

  const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false });

  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-between p-0 md:p-2 mt-20 `}
    >
      <Navbar />
      <JoyRideNoSSR
        spotlightClicks
        showSkipButton
        showProgress
        continuous
        scrollToFirstStep
        styles={{
          options: {
            primaryColor: '#d00000',
          },
        }}
        steps={[
          {
            content:
              'Change between the language your most comfortable with, Sintha pakati pa chilankhulo chomwe mumamasuka nacho. ',
            target: '#translator',
          },
          {
            content: 'Click here to activate dark mode.',
            target: '#dark-mode',
          },
          {
            content: 'Click here if you need any more assistance in the page',
            target: '#help',
          },
        ]}
      />
      <Hero
        hero_title_1={translate('hero_title_1')}
        hero_title_2={translate('hero_title_2')}
      />
      <About />
      <Features />
      <Team />
      <Contact />
      <NewsLetter />
    </main>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
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
//       <Link className="mx-3 btn btn-secondary" href={'/auth/login'}>
//         Sign In
//       </Link>
//       <Link className="mx-3 btn" href={'/auth/register'}>
//         Sign Up
//       </Link>
//     </div>
// </div>;
