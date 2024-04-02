import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RegistrationStepper from './RegistrationStepper';

/**
 * Component to display a loading message while setting up the account.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AccountSetUpBuilderLoad = (): JSX.Element => {
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
 * Component for the account setup builder.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AccountSetUpBuilder = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 6 seconds delay
  setTimeout(() => {
    setLoading(true);
  }, 6000);

  return <>{loading ? <RegistrationStepper /> : <AccountSetUpBuilderLoad />}</>;
};

export default AccountSetUpBuilder;
