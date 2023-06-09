import Link from 'next/link';
import RegularButton from '../../components/common/buttons/primary-button';
import ContactDetails from '../../components/pagecomponents/checkout/contact-details';
import Map from '../../components/pagecomponents/checkout/map';
import TutorCheckoutSummary from '../../components/pagecomponents/payment/summary';
import Background from '../../components/shared/background/background';
import Navbar from '../../components/shared/navbar/Navbar';

const Checkout = () => {
  return (
    <Background>
      <Navbar/>
      <div className="flex flex-row mx-auto justify-evenly max-w-screen-2xl mt-20">
        <div className="relative flex flex-col justify-center w-full">
          <div className="flex flex-col my-auto">
            <div className="flex flex-col max-w-5xl mb-8">
              <h1 className="text-xl text-[#1c1c1c] font-medium mb-2">
                Contact Checkout
              </h1>
            </div>
            <section className="">
              <div className="max-w-5xl mb-4">
                <div className="my-4">
                  <ContactDetails />
                </div>
                <div className="my-4">
                  <Map />
                </div>
              </div>
            </section>
            <div className="max-w-5xl mt-8 mb-16 ">
              <Link href="/find_tutor">
                <RegularButton name="Find another tutor" />
              </Link>
            </div>
          </div>
        </div>
        <TutorCheckoutSummary />
      </div>
    </Background>
  );
};

export default Checkout;
