// 'use client
// import {
//   FacebookAuthProvider,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from 'firebase/auth';
// import 'firebase/compat/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GiPadlock } from 'react-icons/gi';
import { ImEnvelop, ImFacebook, ImGoogle } from 'react-icons/im';
import PageWrapper from '../../components/shared/PageWrapper';
// import { signInToAccount } from '../../lib/helpers/reducers/userReducer';
// import { useAppDispatch } from '../../lib/hooks/index';
// import { useAuth } from '../../lib/services/firebase/auth';
// import { auth } from '../../lib/services/firebase/index';

// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// Define the component
const Index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  // const dispatch = useAppDispatch();
  const [showPassword, setshowPassword] = useState(false);
  // const { authUser, isLoading } = useAuth();
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     router.push('/Auth/RegistrationStepper');
  //   }
  // });

  // sign in user with email and password
  const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!email || !password) return;

    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       dispatch(signInToAccount(userCredential.user));
    //       router.push('/Auth/RegistrationStepper');
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message;
    //       alert(`${errorMessage}`);
    //     });
    // };

    //sign in with google
    // const signInWithGoogle = async () => {
    //   const { user }: any = await signInWithPopup(auth, googleProvider)
    //     .then(() => {
    //       router.push('/Auth/RegistrationStepper');
    //       alert('User signed in successfully');
    //     })
    //     .catch((error) => {
    //       const errorMessage =
    //         error && error.message ? error.message : 'An unknown error occurred';
    //       alert(`${errorMessage}`);
    //     });

    //   console.log(user);
    // };

    //sign in with facebook
    // const signInWithFacebook = () => {
    //   signInWithPopup(auth, facebookProvider)
    //     .then((result) => {
    //       router.push('/Auth/RegistrationStepper');
    //       setUser(result.user);
    //       console.log(user);
    //       console.log(profilePicture);
    //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //       const credential = FacebookAuthProvider.credentialFromResult(result);
    //       const accessToken = credential.accessToken;
    //       // fetch facebook graph api to get user actual profile picture
    //       fetch(
    //         `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
    //       )
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //           setProfilePicture(URL.createObjectURL(blob));
    //         });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  };
  // Define the state

  return (
    // Top level container
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen py-5 mx-4 pt-5 sm:pt-0 sm:mx-2">
        <main className="flex flex-col items-center justify-center flex-1 px-0 sm:px-20 text-center w-full">
          <div className="bg-white shadow-2xl rounded-2xl flex sm:w-2/3 w-full max-w-4xl flex-col sm:flex-row">
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
                <div className="flex justify-center my-2">
                  {/* Facebook login button */}
                  <button
                    // onClick={}
                    className=" text-orange-500 border-2 mr-4 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImFacebook className="text-sm" />
                  </button>
                  {/* Google login button */}
                  <button
                    // onClick={}
                    className=" text-orange-500 mr-4 border-2 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImGoogle className="text-sm" />
                  </button>
                  {/* Login section */}
                </div>
                <p className="text-orange-500"> or </p>
                <p className="text-gray-500 mb-3"> Use your email account</p>
                <div className="flex flex-col items-center">
                  {/* Email input field */}
                  <div className="bg-gray-200 w-64 p-2 flex items-center rounded-lg mb-3">
                    <ImEnvelop className="text-gray-400 m-2 " />
                    <input
                      type="text"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      className="bg-gray-200 outline-none w-full text-sm text-gray-600"
                    />
                  </div>
                  {/* Password input field */}
                  <div className="bg-gray-200 w-64 p-2 flex items-center rounded-lg">
                    <GiPadlock className="text-gray-400 m-2 " />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
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
                    className="text-orange-500 border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Sign In
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
