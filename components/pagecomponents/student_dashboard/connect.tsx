// import client from "../../lib/services/sanity/sanity";
import { createClient } from 'next-sanity';

/**
 * Configuration object for the Sanity client.
 * @typedef {Object} SanityClientConfig
 * @property {string} projectId - The ID of the Sanity project.
 * @property {string} dataset - The dataset within the Sanity project.
 * @property {boolean} useCdn - Indicates whether to use the Sanity CDN.
 */

/**
 * Creates a Sanity client with the specified configuration.
 * @param {SanityClientConfig} config - The configuration object for the Sanity client.
 * @returns {SanityClient} The Sanity client instance.
 */
const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

/**
 * Fetches a student with the specified email from the Sanity API.
 * @param {string} email - The email of the student to fetch.
 * @returns {Promise<Object>} A promise that resolves to the student object matching the email.
 */
export async function fetchStudent(email) {
  /**
   * Query string to fetch a student with the specified email.
   * @type {string}
   */
  const query = `*[_type == "student" && email == $email] {
    _id,
    first_name,
    last_name,
    email,
    phone,
    tutor
  }`;

  // Fetch the student using the Sanity client and the query
  const student = await client.fetch(query);
  return student;
}
