import React from 'react';
import NewTutors from './NewTutors';

const NewTutorManagement: React.FC = () => {
  // Sample list of users
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      paymentStatus: 'Paid',
      photo: 'https://example.com/user1.jpg',
      reviewStatus: 'Approved',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      paymentStatus: 'Unpaid',
      photo: 'https://example.com/user2.jpg',
      reviewStatus: 'Pending',
    },
    // Add more users as needed
  ];

  const handleDeleteUser = (userId: number) => {
    // Handle delete logic for the user with the given userId
    console.log(`Deleting user with ID ${userId}`);
    // Implement your delete user logic here
  };

  return (
    <div className="">
      <NewTutors users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default NewTutorManagement;
