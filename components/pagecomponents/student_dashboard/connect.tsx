// import client from "../../lib/services/sanity/sanity";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

export async function fetchStudent() {
  const query = `*[_type == "student" && email == $email] {
        _id,
          first_name,
            last_name,
            email,
            phone,
            tutor
      }`;
  const student = await client.fetch(query);
  return student;
}
