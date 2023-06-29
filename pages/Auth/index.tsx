import { createClient } from '@sanity/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { GiPadlock } from 'react-icons/gi';
import { ImEnvelop } from 'react-icons/im';
import { BallTriangle } from 'react-loader-spinner';
import PageWrapper from '../../components/shared/PageWrapper';
import { AuthContext } from '../../context/auth/SessionContext';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  apiVersion: '2021-09-18', // The API version you are using
  useCdn: false, // Set to true if you want to enable the Content Delivery Network (CDN)
});
// Define the component
const Index = ({ searchParams }: IProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [showPassword, setshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login, setTutorData } = useContext(AuthContext);

  // sign in user with email and password
  const loginUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !password) return;
    console.log(name);
    console.log(password);
    const data = JSON.stringify({ user: name, pwd: password });

    try {
      const response = await fetch(
        'https://authentication-backend-4m4xdz5bj-mphunzitsi-backend.vercel.app/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }
      );

      if (response.ok) {
        const body = await response.json();
        const emailAddress = body['user']['email'];

        //session context
        login(body);

        // redirecting to the required pages
        if (body['user']['role'] == 'admin') {
          router.push('/user/admin/Dashboard');
        } else if (body['user']['role'] == 'tutor') {
          try {
            client
              .fetch('*[_type == "tutor" && email == $emailAddress]', {
                emailAddress,
              })
              .then((data) => {
                console.log(data);
                // console.log('THE TUTOR IS:::::::' + tutor);
                setTutorData(data);
                const tutor = JSON.stringify(data);
                console.log('THE TUTOR DATA IS::::::::' + tutor);
              });

            console.log('context created');
          } catch (error) {
            console.log('Context not created followed by this error: ' + error);
          }
          router.push('/user/tutor/Dashboard');
        } else if (body['user']['role'] == 'student') {
          router.push('/user/student/Dashboard');
        }
      } else if (response.status == 400) {
        var body = response.json();
        alert(body['message']);
        console.log('status code' + response.status);
        // Login failed, handle error
        // You can display an error message to the user
      } else if (response.status == 500) {
        const body = response.json();
        alert(body['message']);
        console.log('response statuscode' + response.status);
      } else if (response.status == 401) {
        const body = response.json();
        alert(body['message']);
        console.log('response statuscode' + response.status);
      }
    } catch (error) {
      // Handle any error that occurred during the request
    }
  };

  // Define the state
  return (
    // Top level container
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen py-5 mx-4 pt-5 sm:pt-0 sm:mx-2 w-4/5">
        <main className="flex flex-col items-center justify-center flex-1 px-0 sm:px-20 text-center w-full">
          <div className="bg-white shadow-2xl rounded-2xl flex sm:w-6/7 w-full max-w-4xl flex-col sm:flex-row">
            {/* Left side of the container */}
            <div className="sm:w-3/5 w-full sm:p-5 p-10">
              <div className="text-left font-bold text-gray-400">
                Mphunzitsi{' '}
                <span className="text-orange-500 text-[30px]">.</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-orange-500">
                  Welcome Back
                </h2>
                <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
                <p className="text-gray-500 mb-3"> Use your email account</p>
                {searchParams?.message && (
                  <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">
                    {searchParams?.message}
                  </p>
                )}
                <div className="flex flex-col items-center">
                  {/* Email input field */}
                  <div className="bg-gray-200 w-64 p-2 flex items-center rounded-lg mb-3">
                    <ImEnvelop className="text-gray-400 m-2 " />
                    <input
                      type="text"
                      name="user"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="email"
                      className="bg-gray-200 outline-none w-full text-sm text-gray-600"
                    />
                  </div>
                  {/* Password input field */}
                  <div className="bg-gray-200 w-64 p-2 flex items-center rounded-lg">
                    <GiPadlock className="text-gray-400 m-2 " />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="pwd"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      className="bg-gray-200 outline-none w-full text-sm text-gray-600"
                    />
                    <div className="relative inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      <svg
                        className="h-4 text-gray-700"
                        fill="none"
                        onClick={() => setshowPassword(!showPassword)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Remember me and Forgot password links */}
                  <div className="flex justify-between w-64 text-gray-500 mt-2 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />{' '}
                      Remember me
                    </label>
                    <Link href="#" className="text-xs">
                      Forgot password?
                    </Link>
                  </div>
                  {/* Sign in button */}
                  <button
                    onClick={(e) => loginUser(e)}
                    className="text-orange-500 border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out w-64"
                  >
                    {isLoading ? (
                      <div className="flex justify-between items-center gap-3">
                        <BallTriangle
                          height={25}
                          width={25}
                          radius={6}
                          color="orange"
                          ariaLabel="ball-triangle-loading"
                          // wrapperClass={{}}
                          // wrapperStyle=""
                          visible={true}
                        />{' '}
                        <p className="flex h-full w-full items-center">
                          loading
                        </p>{' '}
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:w-2/5 w-full bg-orange-500 text-white sm:rounded-tr-2xl rounded-2xl sm:rounded-br-2xl py-36 px-12 ">
              <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
              <div className="border-2 w-10 border-white-600 inline-block mb-2"></div>
              <p className="mb-10">
                You want to join the elite community? Sign up now and get access
              </p>
              <Link
                href="/Auth/SignUp"
                className="text-white border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};
export default Index;
