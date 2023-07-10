// pages/api/webhooks.js

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

export default function handler(req, res) {
  // ...

  // Subscribe to the specific dataset to receive real-time updates
  const subscription = client
    .listen('*[_type == "notification"]')
    .subscribe((update) => {
      // Handle the real-time update received from Sanity.io
      // Update your application state or trigger a real-time update
    });

  // Cleanup the subscription when the request ends or as needed
  req.on('end', () => {
    subscription.unsubscribe();
  });

  // ...
}
