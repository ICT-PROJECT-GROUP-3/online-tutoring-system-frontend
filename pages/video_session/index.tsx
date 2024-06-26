import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import PageWrapper from '../../components/shared/PageWrapper';

/**
 * Component for entering a room by providing a room code.
 */
const Room = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [RoomCode, setRoomCode] = useState(router.query.name);

  /**
   * Handles the form submission when the user clicks the submit button.
   * @param {Event} e - The form submit event.
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(RoomCode);
    router.push(`./video_session/${RoomCode}`);
  };

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-1/2 min-h-full p-24 px-6 py-12 bg-white shadow-2xl mt-28 lg:px-8 rounded-xl">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="w-10 h-10 mx-auto"
            src="/assets/images/Logo.png"
            alt=""
            width={170}
            height={100}
          />
          <h2 className="mt-10 text-2xl font-extrabold leading-9 tracking-tight text-center text-gray-600">
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
                  <div className="flex items-center justify-between gap-3">
                    <BallTriangle
                      height={25}
                      width={25}
                      radius={6}
                      color="white"
                      ariaLabel="ball-triangle-loading"
                      visible={true}
                    />
                    <p className="flex items-center w-full h-full">loading</p>
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
