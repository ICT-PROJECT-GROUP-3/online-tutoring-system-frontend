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
//       <div className="w-full m-auto sm-p-4 py-4 rounded-lg bg-white overflow-y-auto">
//         <div className="p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:items-center justify-start sm:justify-between cursor-pointer">
//           <span>Name</span>
//           <span className='hidden sm:flex '>Email</span>
//           <span className="hidden md:flex sm:text-left text-right">
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
//             className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center justify-between cursor-pointer"
//           >
//             <div className="flex items-center">
//               <div className="bg-[#3706172f] p-1 rounded-lg">
//                 <BsFillPersonFill className="text-[#370617] text-lg" />
//               </div>
//               <p className="pl-4 text-xs">{user.name}</p>
//             </div>
//             <div className="hidden sm:flex text-xs">{user.email}</div>
//             <div className=" hidden md:flex text-gray-600 sm:text-left text-right text-xs">
//               {user.paymentStatus}
//             </div>
//             <div className="hidden md:flex text-xs">{user.reviewStatus}</div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewTutors;

import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import UseModal from './UseModal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
          {users.map((user, i) => (
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 * i + 1 }}
              key={user.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center justify-between cursor-pointer"
              onClick={() => handleOpenUseModal(user)} // Add onClick event handler
            >
              <div className="flex items-center">
                <div className="bg-[#3706172f] p-1 rounded-lg">
                  <BsFillPersonFill className="text-[#370617] text-lg" />
                </div>
                <p className="pl-4 text-xs">{user.name}</p>
              </div>
              <div className="hidden sm:flex text-xs">{user.email}</div>
              <div className="hidden md:flex text-gray-600 sm:text-left text-right text-xs">
                {user.paymentStatus}
              </div>
              <div className="hidden md:flex text-xs">{user.reviewStatus}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* UseModal */}
      {selectedUser && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl h-full overflow-auto">
            <div className="flex justify-end">
              <button
                onClick={handleCloseUseModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <AiOutlineCloseCircle className="w-5 h-5" />
              </button>
            </div>
            {/* <UseModal user={selectedUser} onClose={handleCloseUseModal} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTutors;


