import RegularButton from '../../../components/common/buttons/primary-button';
import SecondaryButton from '../../../components/common/buttons/secondary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import Title from '../../../components/common/input/title';

const AccountSettings = () => {
  // const {register , handleSubmit} = useForm()

  // const [nameError, setNameError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  return (
    <>
      <div className="flex flex-col w-screen justify-items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
          Account Settings
        </h1>
        <div className="w-11/12 mx-auto md:w-4/5 lg:w-3/5">
          <CardDropShadow>
            <form className="m-8">
              <h2 className="text-lg sm:text-xl md:text-2xl text-left text-[#1c1c1c] my-4">
                Personal Information
              </h2>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title title="First Name" info="" />
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title title="Last Name" info="" />
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title title="Email" info="" />
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title title="Phone Number" info="" />
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <svg
                width={1083}
                height={1}
                className="w-full my-8"
                viewBox="0 0 1083 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <line
                  x1="-4.37114e-8"
                  y1="0.5"
                  x2={1083}
                  y2="0.499905"
                  stroke="#DAD5CE"
                />
              </svg>
              <h2 className="text-lg sm:text-xl md:text-2xl text-left text-[#1c1c1c] my-4">
                Payment Information
              </h2>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title
                    title="Card Number"
                    info="Enter the 16-digit card number on the card"
                  />
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 md:flex-row md:items-center">
                <div className="w-full md:w-1/2">
                  <Title
                    title="CVV Number"
                    info="Enter 3 or 4 digit number on the card."
                  />
                </div>
                <div className="flex flex-row items-center w-full md:w-1/2">
                  <div className="w-32 md:w-80">
                    <input
                      className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                      id="inline-full-name"
                      type="text"
                      placeholder="MM"
                    />
                  </div>
                  <div className="w-8 mx-auto text-2xl text-center">/</div>
                  <div className="w-32 md:w-80">
                    <input
                      className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                      id="inline-full-name"
                      type="text"
                      placeholder="YY"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-6 md:flex-row md:items-center">
                <div className="md:w-1/2">
                  <Title
                    title="Expiry Date"
                    info="Enter the expiration date on the card."
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 md:flex-row md:items-center">
                <div className="w-full md:w-1/2">
                  <Title title="Password" info="Enter your dynamic password." />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <div className="grid justify-end w-full grid-cols-2 gap-2 md:w-1/2 md:items-center">
                  <RegularButton name={'Edit Account'} />
                  <SecondaryButton name={'Delete Account'} />
                </div>
              </div>
            </form>
          </CardDropShadow>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
