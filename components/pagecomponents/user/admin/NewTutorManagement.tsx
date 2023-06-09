import React, { useState, useEffect } from 'react';
import NewTutors from './NewTutors';
// Importing the sanity client
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  apiVersion: '2021-09-18'
});

const NewTutorManagement: React.FC = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    // Fetch the user data
    client
      //  .fetch('*[_type == "tutor"]{...}[0...4]')
      .fetch('*[_type == "tutor"]{...}{..., "rating": coalesce(rating, "unknown")}[0...4]')
       .then((data) => {
        // Handle the fetched data
        console.log(data);
        setTutors(data); // Update the tutors state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching tutors:', error);
      });
  }, []);

  const handleDeleteTutor = (tutorId: number) => {
    // Handle delete logic for the tutor with the given tutorId
    console.log(`Deleting tutor with ID ${tutorId}`);
    // Implement your delete tutor logic here
  };

  return (
    <div className="">
      <NewTutors tutors={tutors} onDeleteTutor={handleDeleteTutor} />
    </div>
  );
};

export default NewTutorManagement;
