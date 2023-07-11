import { createClient } from '@sanity/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { GiPadlock } from 'react-icons/gi';
import { ImEnvelop } from 'react-icons/im';
import { BallTriangle } from 'react-loader-spinner';
import PageWrapper from '../../components/shared/PageWrapper';
import { AuthContext } from '../../context/auth/SessionContext';

/**
 * Interface for the props of the Index component.
 */
interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  apiVersion: '2021-09-18', // The API version you are using
  useCdn: false, // Set to true if you want to enable the Content Delivery Network (CDN)
});

/**
 * The Index component.
 *
 * @param {IProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const Index = ({ searchParams }: IProps): JSX.Element => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [showPassword, setshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login, setTutorData, setStudentData } = useContext(AuthContext);

  /**
   * Handles user login with email and password.
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} e - The event object.
   * @returns {Promise<void>} A Promise that resolves when the login process is complete.
   */
  const loginUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
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

      // Checking if the log in is successful
      if (response.ok) {
        const body = await response.json();
        const emailAddress = body['user']['email'];

        // Adding the authenticated user to the session context
        login(body);

        // Checking if the authenticated user is an admin
        if (body['user']['role'] == 'admin') {
          router.push('/user/admin/Dashboard');
        }
        // Checking if the authenticated user is a tutor
        else if (body['user']['role'] == 'tutor') {
          // Fetch tutor data
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
        }
        // Checking if the authenticated user is a student
        else if (body['user']['role'] == 'student') {
          // Fetch student data
          try {
            client
              .fetch(
                `*[_type == "student" && email == $emailAddress] {
                  _id,
                  first_name,
                  last_name,
                  email,
                  phone,
                  "tutorName": tutor[]->name,
                  "tutorSlug": tutor[]->slug,
                  "tutorEmail": tutor[]->email,
                  "tutorRef": tutor[]._ref,
              }`,
                {
                  emailAddress,
                }
              )
              .then((data) => {
                console.log(data);
                setStudentData(data);
                const student = JSON.stringify(data);
                console.log('THE STUDENT DATA IS::::::::' + student);
              });

            console.log('context created');
          } catch (error) {
            console.log('Context not created followed by this error: ' + error);
          }
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

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-4/5 min-h-screen py-5 pt-5 mx-4 sm:pt-0 sm:mx-2">
        <main className="flex flex-col items-center justify-center flex-1 w-full px-0 text-center sm:px-20">
          <div className="flex flex-col w-full max-w-4xl bg-white shadow-2xl rounded-2xl sm:w-6/7 sm:flex-row">
            <div className="w-full p-10 sm:w-3/5 sm:p-5">
              <div className="font-bold text-left text-gray-400">
                Mphunzitsi{' '}
                <span className="text-orange-500 text-[30px]">.</span>
              </div>
              <div className="py-10">
                <h2 className="mb-2 text-3xl font-bold text-orange-500">
                  Welcome Back
                </h2>
                <div className="inline-block w-10 mb-2 border-2 border-orange-500"></div>
                <p className="mb-3 text-gray-500"> Use your email account</p>
                {searchParams?.message && (
                  <p className="px-5 py-2 text-red-700 bg-red-100 rounded-md">
                    {searchParams?.message}
                  </p>
                )}
                <div className="flex flex-col items-center">
                  <div className="flex items-center w-64 p-2 mb-3 bg-gray-200 rounded-lg">
                    <ImEnvelop className="m-2 text-gray-400 " />
                    <input
                      type="text"
                      name="user"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="email"
                      className="w-full text-sm text-gray-600 bg-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex items-center w-64 p-2 bg-gray-200 rounded-lg">
                    <GiPadlock className="m-2 text-gray-400 " />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="pwd"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      className="w-full text-sm text-gray-600 bg-gray-200 outline-none"
                    />
                    <div className="relative inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
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
                  <div className="flex justify-between w-64 mt-2 mb-5 text-gray-500">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />{' '}
                      Remember me
                    </label>
                    <Link href="#" className="text-xs">
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    onClick={(e) => loginUser(e)}
                    className="inline-block w-64 px-12 py-2 font-semibold text-orange-500 transition duration-300 ease-in-out border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-between gap-3">
                        <BallTriangle
                          height={25}
                          width={25}
                          radius={6}
                          color="orange"
                          ariaLabel="ball-triangle-loading"
                          visible={true}
                        />{' '}
                        <p className="flex items-center w-full h-full">
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

            <div className="w-full px-12 text-white bg-orange-500 sm:w-2/5 sm:rounded-tr-2xl rounded-2xl sm:rounded-br-2xl py-36 ">
              <h2 className="mb-2 text-3xl font-bold">Hello, Friend</h2>
              <div className="inline-block w-10 mb-2 border-2 border-white-600"></div>
              <p className="mb-10">
                You want to join the elite community? Sign up now and get access
              </p>
              <Link
                href="/Auth/SignUp"
                className="inline-block px-12 py-2 font-semibold text-white transition duration-300 ease-in-out border-2 border-white rounded-full hover:bg-white hover:text-orange-600"
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
