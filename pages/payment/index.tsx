import VisaCard from '../../components/pagecomponents/payment/credit-card';
import Mpamba from '../../components/pagecomponents/payment/mpamba';
import PayPal from '../../components/pagecomponents/payment/paypal';
import TutorCheckoutSummary from '../../components/pagecomponents/payment/summary';
import Background from '../../components/shared/background/background';
import Navbar from '../../components/shared/navbar/Navbar';

const Payment = () => {
  return (
    <Background>
      <Navbar />
      <div className="flex flex-row mx-auto justify-evenly max-w-screen-2xl mt-20">
        <div className="relative flex flex-col justify-center w-full overflow-hidden">
          <div className="flex flex-col items-center h-full my-24">
            <div className="max-w-5xl mb-8">
              <h1 className="text-xl text-[#1c1c1c] font-medium mb-2">
                Contact Checkout
              </h1>
            </div>
            <section className="grid mb-8 place-items-center">
              <div className="flex flex-col max-w-5xl gap-4 mx-auto">
                <PayPal />
                <VisaCard />
                <Mpamba />
              </div>
            </section>
          </div>
        </div>
        <TutorCheckoutSummary />
      </div>
    </Background>
  );
};

export default Payment;
