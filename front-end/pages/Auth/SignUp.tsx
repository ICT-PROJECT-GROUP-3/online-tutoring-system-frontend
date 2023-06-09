import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { GiPadlock } from 'react-icons/gi';
import { ImEnvelop, ImFacebook, ImGoogle } from 'react-icons/im';
import { MdSupervisorAccount } from 'react-icons/md';
import { Loader } from '../../components/shared/Loader';
import PageWrapper from '../../components/shared/PageWrapper';
import { useAuth } from '../../lib/services/firebase/auth';
import { auth, db } from '../../lib/services/firebase/index';
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

// Define the component
const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [type, setType] = useState('');
  const router = useRouter();
  const { authUser, isLoading, setAuthUser } = useAuth();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [setUser] = useState(null);
  const [setProfilePicture] = useState(null);

  useEffect(() => {
    if (!isLoading && authUser) {
      router.push('/Auth');
    }
  });

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if the fields are not null
    if (!name || !email || !password || !type) return;
    // check if the passwords do not match
    else if (password != confirmPassword) {
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }
    }

    // create the user in firebase
    try {
      const { user }: any = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        setDoc(doc(collection(db, 'users'), authUser.uid), {
          type: type,
        });
        alert('user created');
        router.push('/Auth');
      });
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      setAuthUser({
        uid: user.uid,
        email: user.email,
        name: name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //sign in with google
  const signInWithGoogle = async () => {
    const { user }: any = await signInWithPopup(auth, googleProvider)
      .then(() => {
        alert('User signed in successfully');
        router.push('/Auth');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`${errorMessage}`);
      });

    console.log(user);
  };

  //sign in with facebook
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
        router.push('/Auth');
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // fetch facebook graph api to get user actual profile picture
        fetch(
          `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
        )
          .then((response) => response.blob())
          .then((blob) => {
            setProfilePicture(URL.createObjectURL(blob));
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // return the loading spinner the render the page
  return isLoading || (!isLoading && !!authUser) ? (
    <Loader />
  ) : (
    // Top level containerConf
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen  py-5 mx-4 pt-5 sm:pt-0 sm:mx-2">
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
                  Lets Create your account
                </h2>
                <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                  {/* Facebook signup button */}
                  <button
                    onClick={signInWithFacebook}
                    className=" text-orange-500 border-2 mr-4 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImFacebook className="text-sm" />
                  </button>
                  {/* Google signup button */}
                  <button
                    onClick={signInWithGoogle}
                    className=" text-orange-500 mr-4 border-2 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImGoogle className="text-sm" />
                  </button>
                  {/* signup section */}
                </div>
                <p className="text-orange-500 mb-2"> or </p>
                <p className="text-gray-500 mb-10 sm:mb-8 flex sm:flex-col items-center ">
                  {' '}
                  Use your email account to sign up{' '}
                </p>
                <p className="text-gray-500 mb-3"> Already have an account?</p>
                <div className="flex flex-col items-center">
                  {/* Sign in button */}
                  <Link
                    href="./"
                    className="text-orange-500 border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:w-2/5 w-full bg-orange-500 sm:rounded-tr-2xl rounded-2xl sm:rounded-br-2xl py-6 px-6 ">
              <h2 className="text-3xl text-white font-bold mb-2">
                Please fill your details below
              </h2>
              <div className="border-2 w-10 border-white-600 inline-block mb-2"></div>
              {/* form */}
              <form onSubmit={registerUser}>
                <div>
                  {/* Name input field */}
                  <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                    <ImEnvelop className="text-gray-300 m-2 " />
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="username"
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                    />
                  </div>
                  {/* Email input field */}
                  <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                    <ImEnvelop className="text-gray-300 m-2 " />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                    />
                  </div>
                  {/* Password input field */}
                  <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                    <GiPadlock className="text-gray-300 m-2 " />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={password}
                      required
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
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
                  {/* Password input field */}
                  <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                    <GiPadlock className="text-gray-300 m-2 " />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={confirmPassword}
                      required
                      placeholder="confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                    />
                    <div className="relative inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      <svg
                        className="h-4 text-gray-700"
                        fill="none"
                        onClick={() =>
                          setshowConfirmPassword(!showConfirmPassword)
                        }
                        //   className={showPassword ? 'hidden' : 'block'}
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
                  {/* tutor or student input field */}
                  <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-8">
                    <MdSupervisorAccount className="text-gray-300 m-2 " />
                    <input
                      type="text"
                      name="account type"
                      value={type}
                      required
                      placeholder="Tutor or Student?"
                      onChange={(e) => setType(e.target.value)}
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                      list="cityname"
                    />
                    <datalist
                      id="cityname"
                      className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                    >
                      <option value="Tutor" className="text-orange" />
                      <option value="Student" />
                    </datalist>
                  </div>
                </div>
                {!passwordsMatch && <p>Passwords do not match.</p>}
                <button
                  type="submit"
                  className="text-white border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};

export default Index;
