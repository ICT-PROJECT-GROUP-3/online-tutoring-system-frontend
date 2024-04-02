import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsFillPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

interface User {
  id: number;
  name: string;
  email: string;
  //   paymentStatus: string;
  photo: string;
  reviewStatus: string;
}

interface UsersTableProps {
  users: User[];
  onDeleteUser: (userId: number) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onDeleteUser }) => {
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);

  const handleDeleteUser = (userId: number) => {
    setDeleteUserId(userId);
  };

  const confirmDeleteUser = () => {
    if (deleteUserId) {
      onDeleteUser(deleteUserId);
      setDeleteUserId(null);
    }
  };

  const cancelDeleteUser = () => {
    setDeleteUserId(null);
  };

  return (
    <div className="px-4 sm:px-8">
      <div className="w-full m-auto rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 px-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span>Name</span>
          <span>Email</span>
          {/* <span className="hidden md:flex sm:text-left text-right">Payment Status</span> */}
          <span className="hidden md:grid">Review Status</span>
          <span className="hidden sm:grid">Action</span>
        </div>
      </div>
      <ul>
        {users.map((user, i) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 * i }}
            // onClick={() => handleDeleteUser(user.id)}
            key={user.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer overflow-hidden"
          >
            <div className="flex items-center">
              <div className="bg-[#3706172f] p-1 rounded-lg">
                <BsFillPersonFill className="text-[#370617] text-lg" />
              </div>
              <p className="pl-4 text-xs">{user.name}</p>
            </div>
            <div className="text-xs">{user.email}</div>
            {/* <div className=" hidden md:flex text-gray-600 sm:text-left text-right">
              {user.paymentStatus}
            </div> */}
            <div className="hidden md:flex text-xs">{user.reviewStatus}</div>
            <div
              className="sm:flex hidden justify-between items-center text-xs"
              onClick={() => handleDeleteUser(user.id)}
            >
              <p className="text-xs">Delete</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </motion.li>
        ))}
      </ul>

      <Dialog open={Boolean(deleteUserId)} onClose={cancelDeleteUser}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 h-screen" />
        <div className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg">
          <Dialog.Title className="font-medium">Delete User</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to delete this user?
          </Dialog.Description>
          <div className="flex justify-end mt-4">
            <button
              onClick={cancelDeleteUser}
              className="mr-2 px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={confirmDeleteUser}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UsersTable;
