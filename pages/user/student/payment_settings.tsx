import { useForm } from 'react-hook-form';
import SecondaryButton from '../../../components/common/buttons/secondary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import Title from '../../../components/common/input/title';
import Layout from './layout';

/**
 * Payment Settings page in the student dashboard.
 * Allows users to manage their payment information.
 */
const PaymentSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    alert('button is clicked')!;
  };

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
                {/* ... */}
                {/* Rest of the form fields */}
                {/* ... */}
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
