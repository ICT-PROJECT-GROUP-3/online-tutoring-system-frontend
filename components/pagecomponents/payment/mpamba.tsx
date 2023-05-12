import Image from 'next/image';
import SecondaryButton from '../../common/buttons/secondary-button';
import CardDropShadow from '../../common/cards/card-dropshadow';

const Mpamba = () => {
  return (
    <>
      <CardDropShadow>
        <div className="mx-16 my-8">
          <div className="flex flex-row items-center mb-12">
            <Image
              width={280}
              height={280}
              src="/assets/images/mpamba.png"
              className="object-cover mr-2 w-7 h-7 rounded-2 "
              alt="TNM mpamba icon"
            />
            <h2 className="text-3xl text-left text-[#1c1c1c]">Mpamba</h2>
          </div>
          <div className="w-1/3 mb-4"></div>
          <form className="w-full">
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Name
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter your full name
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Number
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter your phone number
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="0999888777"
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Pin
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter your dynamic pin
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="****"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-full">
                <SecondaryButton name={'Pay'} />
              </div>
            </div>
          </form>
        </div>
      </CardDropShadow>
    </>
  );
};

export default Mpamba;
