import client from '../path/to/your/sanity/client';

export async function getSessions() {
  const query = `*[_type == "session"] {
    _id,
    student->{
      name
    },
    tutor->{
      name
    },
    subject->{
      name
    },
    start,
    end,
    duration,
    location,
    notes
  }`;
  
  const sessions = await client.fetch(query);
  return sessions;
}
