import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '3iouolde',
    dataset: 'production',
    apiVersion: "2023-05-08",
    useCdn: false
});

export default client;