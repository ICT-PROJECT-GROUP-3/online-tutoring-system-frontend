import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../../lib/services/sanity/connect';
import UsersTable from './Users';

const UserManagementPage: React.FC = () => {
  const [tutorData, setTutorData] = useState([]);

  useEffect(() => {
    fetchData().then((tutor) => {
      console.log(tutor);
      setTutorData(tutor);
    });
  }, []);

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
    <div className="min-h-screen">
      <div className="justify-between p-5 mx-5">
        <h1 className="text-xl text-gray-700">User Management</h1>
      </div>
      <UsersTable users={tutorData} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UserManagementPage;
