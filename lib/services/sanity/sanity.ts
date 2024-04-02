import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  apiVersion: '2023-06-18', // The API version you are using
  useCdn: false, // Set to true if you want to enable the Content Delivery Network (CDN)
});
export default client;
