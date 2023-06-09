import { useRouter } from 'next/router';
import { HiCreditCard } from 'react-icons/hi';
import {
  // ApplePay,
  CreditCard,
  // GooglePay,
  PaymentForm,
} from 'react-square-web-payments-sdk';
import CardDropShadow from '../../common/cards/card-dropshadow';
const VisaCard = () => {
  const router = useRouter();
  return (
    <>
      <CardDropShadow>
        <div className="mx-16 my-8">
          <div className="flex flex-row items-center mb-12">
            <HiCreditCard className="fill-[#1c1c1c] w-8 h-8 mr-4" />
            <h2 className="text-3xl text-left text-[#1c1c1c] align-top">
              Credit Card
            </h2>
          </div>
          <div className="w-1/3 mb-4">
            <PaymentForm
              applicationId="sandbox-sq0idb-lla6F4wtjdejc5-qlhMzRw" // {process.env.SQUARE_APPLICATION_ID}
              cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                const response = await fetch('/api/payments/payment', {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({
                    sourceId: token.token,
                    payment_amount: 500,
                  }),
                }).then(() => {
                  router.push('/checkout');
                });
                // console.log(await response.));
              }}
              locationId="LPPWJ2K9XFR34" // {process.env.LOCATION_ID}
            >
              {/* <ApplePay /> */}
              {/* <GooglePay /> */}
              <CreditCard
                buttonProps={{
                  css: {
                    backgroundColor: '#f4f1ed',
                    color: '#d03434',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#d03434',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    '&:hover': {
                      backgroundColor: '#d03434',
                      color: '#f4f1ed',
                    },
                  },
                }}
              />
            </PaymentForm>
          </div>
          <p className="text-lg text-left text-[#aba7a1]">
            Enter all the fields appropriately, then you will be charged the
            fixed stated amount.
          </p>
          {/* <form className="w-full">
            <div className="flex-col mb-6 md:flex md:items-center">
              <div className="mb-4 md:w-full">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Card Number
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter the 16-digit card number on the card
                </label>
              </div>
              <div className="md:w-full">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  CVV Number
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter 3 or 4 digit number on the card
                </label>
              </div>
              <div className="md:w-48">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="MM"
                />
              </div>
              <div className="mx-auto text-2xl text-center md:w-auto">/</div>
              <div className="md:w-48">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Expiry Date
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter the expiration date on the card
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/2">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
                  htmlFor="inline-full-name"
                >
                  Password
                </label>
                <label
                  className="block text-base text-left text-[#aba7a1]"
                  htmlFor="inline-full-name"
                >
                  Enter your dynamic password
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white/5 appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                  id="inline-full-name"
                  type="text"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-full">
                <SecondaryButton />
              </div>
            </div>
          </form> */}
        </div>
      </CardDropShadow>
    </>
  );
};

export default VisaCard;
