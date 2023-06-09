// import React, { useState } from 'react';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { motion } from 'framer-motion';
// import UseModal from './UseModal';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// interface Tutor {
//   fullname: string;
//   id: number;
//   name: string;
//   email: string;
//   paymentStatus: string;
//   photo: string;
//   reviewStatus: string;
// }

// interface TutorTableProps {
//   tutors: Tutor[];
//   onDeleteTutor: (tutorId: number) => void;
// }

// const NewTutors: React.FC<TutorTableProps> = ({ tutors, onDeleteTutor }) => {
//   const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

//   const handleOpenUseModal = (tutor: Tutor) => {
//     setSelectedTutor(tutor);
//   };

//   const handleCloseUseModal = () => {
//     setSelectedTutor(null);
//   };

//   return (
//     <div className="p-2 sm:p-8">
//       <div className="w-full m-auto sm-p-4 py-4 rounded-lg bg-white overflow-y-auto">
//         <div className="p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:items-center justify-start sm:justify-between cursor-pointer">
//           <span>Name</span>
//           <span className="hidden sm:flex">Email</span>
//           <span className="hidden md:flex sm:text-left text-right">
//             Payment Status
//           </span>
//           <span className="hidden md:grid">Review Status</span>
//         </div>
//         <ul className="max-h-80 overflow-y-auto">
//           {tutors.map((user, i) => (
//             <motion.li
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.3 * i + 1 }}
//               key={user.id}
//               className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center justify-between cursor-pointer"
//               onClick={() => handleOpenUseModal(user)} // Add onClick event handler
//             >
//               <div className="flex items-center">
//                 <div className="bg-[#3706172f] p-1 rounded-lg">
//                   <BsFillPersonFill className="text-[#370617] text-lg" />
//                 </div>
//                 <p className="pl-4 text-xs">{user.fullname}</p>
//               </div>
//               <div className="hidden sm:flex text-xs">{user.email}</div>
//               <div className="hidden md:flex text-gray-600 sm:text-left text-right text-xs">
//                 {user.paymentStatus}
//               </div>
//               <div className="hidden md:flex text-xs">{user.reviewStatus}</div>
//             </motion.li>
//           ))}
//         </ul>
//       </div>

//       {/* UseModal */}
//       {selectedTutor && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg p-8 max-w-2xl h-full overflow-auto">
//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseUseModal}
//                 className="text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 <AiOutlineCloseCircle className="w-5 h-5" />
//               </button>
//             </div>
//             <UseModal tutor={selectedTutor} onClose={handleCloseUseModal} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewTutors;

import React, { ReactNode, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { MdAttachFile } from 'react-icons/md';

interface Tutor {
  educationExperience: ReactNode;
  gender: string;  
  location: string; 
  fullname: string;
  id: number;
  name: string;
  email: string;
  payment_status: string;
  review_status: string;
  platform: string;
  languages: string;
  total_teaching_experience: string;
  area_of_expertise: string;
  phone_number: string;
  date_of_birth: string;
  teaching_experience: string;
  bio: string[];

}

interface TutorTableProps {
  tutors: Tutor[];
  onDeleteTutor: (tutorId: number) => void;
}

interface ModalProps {
  tutor: Tutor | null;
  onClose: () => void;
}

const ModalDetails: React.FC<ModalProps> = ({ tutor, onClose }) => {
  if (!tutor) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl h-full overflow-auto">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <AiOutlineCloseCircle className="w-5 h-5" />
          </button>
        </div>
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Tutor Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and all necessary information.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Fullname</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.fullname}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Payment Status</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.payment_status}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Review Status</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.review_status}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Languages</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.languages}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">platform</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.platform}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Gender</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.gender}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.location}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Teaching Experience</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.teaching_experience}</dd>
              </div> 
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Area of Expertise</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.area_of_expertise}</dd>
              </div>  
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.phone_number}</dd>
              </div>  
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.date_of_birth}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.bio[0].children[0].text}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Total Teaching Experience</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tutor.total_teaching_experience}</dd>
              </div>
                            
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <MdAttachFile className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">certification of creditions</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <MdAttachFile className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Education qualification</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Actions</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center">
              <button className="mr-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Approve
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Decline
              </button>
            </dd>
          </div>
              {/* Add more fields based on your Tutor type */}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewTutors: React.FC<TutorTableProps> = ({ tutors, onDeleteTutor }) => {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const handleOpenUseModal = (tutor: Tutor) => {
    setSelectedTutor(tutor);
  };

  const handleCloseUseModal = () => {
    setSelectedTutor(null);
  };

  return (
    <div className="p-2 sm:p-8">
      <div className="w-full m-auto sm-p-4 py-4 rounded-lg bg-white overflow-y-auto">
        <div className="p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:items-center justify-start sm:justify-between cursor-pointer">
          <span>Name</span>
          <span className="hidden sm:flex">Email</span>
          <span className="hidden md:flex sm:text-left text-right">
            Payment Status
          </span>
          <span className="hidden md:grid">Review Status</span>
        </div>
        <ul className="max-h-80 overflow-y-auto">
          {tutors.map((tutor, i) => (
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 * i + 1 }}
              key={tutor.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center justify-between cursor-pointer"
              onClick={() => handleOpenUseModal(tutor)}
            >
              <div className="flex items-center">
                <div className="bg-[#3706172f] p-1 rounded-lg">
                  <BsFillPersonFill className="text-[#370617] text-lg" />
                </div>
                <p className="pl-4 text-xs">{tutor.fullname}</p>
              </div>
              <div className="hidden sm:flex text-xs">{tutor.email}</div>
              <div className="hidden md:flex text-gray-600 sm:text-left text-right text-xs">
                {tutor.payment_status}
              </div>
              <div className="hidden md:flex text-xs">{tutor.review_status}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      {selectedTutor && (
        <ModalDetails tutor={selectedTutor} onClose={handleCloseUseModal} />
      )}
    </div>
  );
};

export default NewTutors;

