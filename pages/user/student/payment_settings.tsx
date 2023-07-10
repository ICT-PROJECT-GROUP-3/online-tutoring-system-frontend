import { useForm } from 'react-hook-form';
import SecondaryButton from '../../../components/common/buttons/secondary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import Title from '../../../components/common/input/title';
import Layout from './layout';

const PaymentSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    alert('button is clicked')!;
  };

  // const [nameError, setNameError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full justify-items-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
            Payment Settings
          </h1>
          <div className="m-4">
            <CardDropShadow>
              <form onSubmit={handleSubmit(submit)} className="m-8">
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
                    <Title
                      title="Password"
                      info="Enter your dynamic password."
                    />
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
                    <input
                      type="submit"
                      value="Edit Account"
                      className="rounded-[2px] bg-[#d03434] p-2 w-auto text-lg text-center text-[#fbf6e6]"
                    />
                    <SecondaryButton name={'Delete Account'} />
                  </div>
                </div>
              </form>
            </CardDropShadow>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PaymentSettings;
