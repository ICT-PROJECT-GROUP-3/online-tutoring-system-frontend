import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import PageWrapper from '../../components/shared/PageWrapper';

const Room = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [RoomCode, setRoomCode] = useState(router.query.name);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(RoomCode);
    router.push(`./video_session/${RoomCode}`);
  };
  return (
    <PageWrapper>
      <div className="flex min-h-full flex-col justify-center items-center mt-28 px-6 py-12 lg:px-8 bg-white w-1/2 shadow-2xl p-24 rounded-xl">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="h-10 w-10 mx-auto"
            src="/assets/images/Logo.png"
            alt=""
            width={170}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-600">
            Enter Room
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Room Code
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={(e) => setRoomCode(e.target.value)}
                  value={RoomCode}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? (
                  <div className="flex justify-between items-center gap-3">
                    <BallTriangle
                      height={25}
                      width={25}
                      radius={6}
                      color="white"
                      ariaLabel="ball-triangle-loading"
                      // wrapperClass={{}}
                      // wrapperStyle=""
                      visible={true}
                    />{' '}
                    <p className="flex h-full w-full items-center">loading</p>{' '}
                  </div>
                ) : (
                  'Enter Room'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Room;
