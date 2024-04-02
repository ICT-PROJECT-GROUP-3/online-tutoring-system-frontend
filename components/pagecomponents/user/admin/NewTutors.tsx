// import { Dialog } from '@headlessui/react';
// import React, { useState } from 'react';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { motion } from 'framer-motion';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   paymentStatus: string;
//   photo: string;
//   reviewStatus: string;
// }

// interface UsersTableProps {
//   users: User[];
//   onDeleteUser: (userId: number) => void;
// }

// const NewTutors: React.FC<UsersTableProps> = ({ users, onDeleteUser }) => {

//   return (
//     <div className="p-2 sm:p-8 ">
//       <div className="w-full py-4 m-auto overflow-y-auto bg-white rounded-lg sm-p-4">
//         <div className="grid justify-start grid-cols-1 p-2 cursor-pointer md:grid-cols-4 sm:grid-cols-3 sm:items-center sm:justify-between">
//           <span>Name</span>
//           <span className='hidden sm:flex '>Email</span>
//           <span className="hidden text-right md:flex sm:text-left">
//             Payment Status
//           </span>
//           <span className="hidden md:grid">Review Status</span>
//         </div>
//       </div>
//       <ul className=''>
//         {users.map((user, i) => (
//          <motion.li
//          initial={{ opacity: 0, y: 100 }}
//          animate={{ opacity: 1, y: 0 }}
//          transition={{ duration: 0.4, delay: 0.3 * i + 1 }}
//             key={user.id}
//             className="grid items-center justify-between grid-cols-1 p-1 my-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3"
//           >
//             <div className="flex items-center">
//               <div className="bg-[#3706172f] p-1 rounded-lg">
//                 <BsFillPersonFill className="text-[#370617] text-lg" />
//               </div>
//               <p className="pl-4 text-xs">{user.name}</p>
//             </div>
//             <div className="hidden text-xs sm:flex">{user.email}</div>
//             <div className="hidden text-xs text-right text-gray-600 md:flex sm:text-left">
//               {user.paymentStatus}
//             </div>
//             <div className="hidden text-xs md:flex">{user.reviewStatus}</div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewTutors;

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import UseModal from './UseModal';

interface User {
  id: number;
  name: string;
  email: string;
  paymentStatus: string;
  photo: string;
  reviewStatus: string;
}

interface UsersTableProps {
  users: User[];
  onDeleteUser: (userId: number) => void;
}

const NewTutors: React.FC<UsersTableProps> = ({ users, onDeleteUser }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenUseModal = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseUseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-2 sm:p-8">
      <div className="w-full py-4 m-auto overflow-y-auto bg-white rounded-lg sm-p-4">
        <div className="grid justify-start grid-cols-1 p-2 cursor-pointer md:grid-cols-4 sm:grid-cols-3 sm:items-center sm:justify-between">
          <span>Name</span>
          <span className="hidden sm:flex">Email</span>
          <span className="hidden text-right md:flex sm:text-left">
            Payment Status
          </span>
          <span className="hidden md:grid">Review Status</span>
        </div>
        <ul className="overflow-y-auto max-h-80">
          {users.map((user, i) => (
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 * i + 1 }}
              key={user.id}
              className="grid items-center justify-between grid-cols-1 p-1 my-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3"
              onClick={() => handleOpenUseModal(user)} // Add onClick event handler
            >
              <div className="flex items-center">
                <div className="bg-[#3706172f] p-1 rounded-lg">
                  <BsFillPersonFill className="text-[#370617] text-lg" />
                </div>
                <p className="pl-4 text-xs">{user.name}</p>
              </div>
              <div className="hidden text-xs sm:flex">{user.email}</div>
              <div className="hidden text-xs text-right text-gray-600 md:flex sm:text-left">
                {user.paymentStatus}
              </div>
              <div className="hidden text-xs md:flex">{user.reviewStatus}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* UseModal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="h-full max-w-2xl p-8 overflow-auto bg-white rounded-lg">
            <div className="flex justify-end">
              <button
                onClick={handleCloseUseModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <AiOutlineCloseCircle className="w-5 h-5" />
              </button>
            </div>
            check
            <UseModal user={selectedUser} onClose={handleCloseUseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTutors;
