import React, { useState } from 'react';
import NewTutors from './NewTutors';
// import { createClient } from 'next-sanity';


// const client = createClient({
//   projectId: '3iouolde',
//   dataset: 'production',
//   apiVersion: '2021-09-18'
// })

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    paymentStatus: "Paid",
    photo: "john-doe.jpg",
    reviewStatus: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    paymentStatus: "Unpaid",
    photo: "jane-smith.jpg",
    reviewStatus: "Approved",
  },
  {
    id: 3,
    name: "David Johnson",
    email: "david.johnson@example.com",
    paymentStatus: "Paid",
    photo: "david-johnson.jpg",
    reviewStatus: "Pending",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    paymentStatus: "Paid",
    photo: "emily-brown.jpg",
    reviewStatus: "Rejected",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    paymentStatus: "Unpaid",
    photo: "michael-wilson.jpg",
    reviewStatus: "Approved",
  },
];


const NewTutorManagement: React.FC = () => {
  // Sample list of users

  // const fetchUsers = async () => {
  //   const query = '*[_type == "tutor"]{fullname, email, paymentstatus, reviewstatus} [0...20]';
  //   const result = await client.fetch(query);
  //   return result;
  // };

  // const [users,setUsers] = useState(client.fetch('*[_type == "tutor"]{fullname, email, paymentstatus, reviewstatus} [0...20]'))

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
