import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { StepperContextProvider } from '../../context/auth/StepperContext';
import RegistrationStepper from './RegistrationStepper';

/**
 * Component to display loading message while setting up the account.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AccountSetUpBuiderLoad = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      Setting up your account. Please wait...
    </motion.div>
  );
};

/**
 * Component for account setup builder.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AccountSetUpBuider = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data } = router.query;
  const parsedData = data ? JSON.parse(data as string) : null;
  console.log(parsedData);

  // 3 seconds delay
  setTimeout(() => {
    setLoading(true);
    // Put the data to the next page
    // router.push({
    //   pathname: '/Auth/Registrationstepper',
    //   query: { data: data },
    // });
  }, 3000);

  return (
    <StepperContextProvider>
      {loading ? <AccountSetUpBuiderLoad /> : <RegistrationStepper />}
    </StepperContextProvider>
  );
};

export default AccountSetUpBuider;
