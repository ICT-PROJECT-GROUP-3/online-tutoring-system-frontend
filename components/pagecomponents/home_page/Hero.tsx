import HomePageWrapper from './HomePageWrapper';

/**
 * Footer component for the homepage.
 *
 * @param {string} hero_title_1 - The first title of the hero section.
 * @param {string} hero_title_2 - The second title of the hero section.
 * @returns {JSX.Element} The rendered footer component.
 */
const Hero = ({ hero_title_1, hero_title_2 }) => {
  return (
    <HomePageWrapper>
      <div className="w-full bg-white shadow-lg top-10">
        {/* Background element */}
        <div className="relative px-6 lg:px-8">
          <div
            className="absolute inset-x-0 overflow-hidden top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl py-16 mx-auto sm:py-48 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* Promotion message */}
              <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                We are on promotions.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span
                    className="absolute inset-0 text-gray-500"
                    aria-hidden="true"
                  />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              {/* Title */}
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-orange-500">Ignite</span> Intelligence
                <span className="text-orange-500">.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide personalized tutoring services that cater to each
                student's individual needs by connecting them with the
                appropriate tutors for effective learning. Join our platform
                today and achieve your academic goals with our help.
              </p>

              {/* Call-to-action buttons */}
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#d03434] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d03434] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-[#d03434]"
                >
                  Find a Tutor
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Background element */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default Hero;
