/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
/**
 * This component represents a newsletter subscription form with additional information.
 *
 * @component
 * @example
 * return (
 *   <Newsletter />
 * )
 */
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import HomePageWrapper from './HomePageWrapper';

/**
 * Newsletter component.
 *
 * @returns {JSX.Element} Newsletter component.
 */
export default function Newsletter() {
  const [state, setState] = useState(0); // State to manage the subscription process state
  const [errorMsg, setErrorMsg] = useState(''); // State to store error messages

  // 0 - initial, 1 - loading, 2 - success, 3 - error

  /**
   * Handles the email subscription.
   *
   * @param {Event} e - Form submit event.
   */
  const subscribeEmail = async (e) => {
    e.preventDefault();

    setState(1); // Set state to loading
    setErrorMsg('');
    console.log(e.target[0].value);
    try {
      const res = await fetch('/api/newsletter/handler', {
        method: 'POST',
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2); // Set state to success
    } catch (e) {
      setErrorMsg(e);
      setState(3); // Set state to error
    }
  };

  return (
    <HomePageWrapper>
      <div className="relative py-16 overflow-hidden bg-gray-900 rounded-lg shadow-lg isolate sm:py-24 lg:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter
                <span className="text-orange-500">.</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Stay informed with our latest news and updates. Subscribe to our
                newsletter for valuable insights.
              </p>
              <div className="flex max-w-md mt-6 gap-x-4">
                {state == 2 ? (
                  <p className="mt-4 text-xl font-medium text-green-800">
                    Thanks for subscribing, you will receive mail once we launch
                    our website.
                  </p>
                ) : (
                  <form onSubmit={subscribeEmail}>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                    {state === 3 ? (
                      <p className="mt-3 text-red-500">{errorMsg}</p>
                    ) : (
                      ''
                    )}
                  </form>
                )}
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <CalendarDaysIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Stay updated with our weekly newsletter. Get the latest
                    news, tips, and resources delivered to your inbox.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <HandRaisedIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Join our newsletter for valuable content and promotions. No
                    spam, only useful updates delivered to you.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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
}
