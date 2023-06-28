import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { StepperContextProvider, useAuthStepperContext } from '../../context/auth/StepperContext';
import RegistrationStepper from './RegistrationStepper';
import { useState } from 'react';


 //jsx to return when the page is loading
 const AccountSetUpBuiderLoad = () => {
    return (
        <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      setting up your account. Please wait...
    </motion.div>
    );
}
  

const AccountSetUpBuider = () => {

    const [loading, setLoading] = useState(false);

// const { tutorData, setUserData } = useAuthStepperContext();
  //data from the previous page
  const router = useRouter();
//   const { data } = router.query;
//   console.log(data);
const { data } = router.query;
const parsedData = data ? JSON.parse(data as string) : null;
console.log(parsedData)


//   const predata = Array.isArray(data) ? data[0] : data; // Convert array to string if needed
//   const finalData = JSON.parse(predata); // Parse string to JSON object
//   tutorData['fullname'] = finalData?.name || '';
//   tutorData['email'] = finalData?.email || '';
//   console.log(finalData);

  // 3 seconds delay
  setTimeout(() => {
    setLoading(true);
    //put the data to the next page
    // router.push({
    //   pathname: '/Auth/Registrationstepper',
    //   query: { data: data },
    // });
  }, 3000);

 

  return (
    //animation
    <StepperContextProvider>
        {loading ? <AccountSetUpBuiderLoad /> : <RegistrationStepper />}
    </StepperContextProvider>
  );
};

export default AccountSetUpBuider;
