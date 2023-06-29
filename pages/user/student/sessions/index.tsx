import Layout from '../layout';
import { useState, useEffect } from 'react';
import client from '../../../../lib/helpers/sanity/sanity';
import { getSessions } from './sessions';
import React from 'react';


const sessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const sessionsData = await getSessions();
      setSessions(sessionsData);
    }
    fetchData();
  }, []);

  return(
    <>
    <Layout>
      <h1>Sessions</h1>
     <ul>
        {sessions.map(session => (
          <li key={session._id}>
            {session.subject && <h3>{session.subject.name}</h3>}
            <p>Student: {session.student.name}</p>
            <p>Tutor: {session.tutor.name}</p>
            <p>Start: {session.start}</p>
            <p>End: {session.end}</p>
            <p>Duration: {session.duration} minutes</p>
            <p>Location: {session.location}</p>
            <p>Notes: {session.notes}</p>
          </li>
        ))}
      </ul>
      </Layout>
    </>
  )
}
export default sessions;