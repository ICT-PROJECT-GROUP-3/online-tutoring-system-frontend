import Link from 'next/link';
import { useRouter } from 'next/router';
import { ImPaypal } from 'react-icons/im';
import SecondaryButton from '../../common/buttons/secondary-button';
import CardDropShadow from '../../common/cards/card-dropshadow';

const PayPal = () => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  return (
    <>
      <CardDropShadow>
        <div className="mx-16 my-8">
          <div className="flex flex-row items-center mb-12">
            <ImPaypal className="fill-[#1c1c1c] w-8 h-8 mr-4" />
            <h2 className="text-3xl text-left text-[#1c1c1c]">Paypal</h2>
          </div>
          {/* Connect to paypal using this button*/}
          <div className="w-1/3 mb-4">
            <Link href={`/tutor_profile/${slug}/payment/checkout`}>
              <SecondaryButton name={'Purchase'} />
            </Link>
          </div>
          <p className="text-lg text-left text-[#aba7a1]">
            You will be directed to PayPal to authorize your payment method,
            then you will be returned to Mphunzitsi to complete this purchase.
          </p>
        </div>
      </CardDropShadow>
    </>
  );
};

export default PayPal;
