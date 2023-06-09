async function uploadVideoToSanity(data, video) {
  const sanityApiKey =
    'skHK4SXyIt4zKcU6X6OIOaG2Zsb2ZYMvQk3oCMakw6KutBjRDje8EtUZVcDpIBSiGbF3cH26h46T9oH6GWg0VH6eDCHDg6uUX669PviEvtqfwTdrE4W7PuB00Mc6aWVq8S3up1LqUPkTeZOmVrtBX6yduClsbvwAceBJQTtRKzpnVZ5FGMuK';
  const sanityProjectId = '3iouolde';
  const sanityDataset = 'production';

  try {
    const response = await fetch(
      `https://${sanityProjectId}.api.sanity.io/v1/data/mutate/${sanityDataset}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sanityApiKey}`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: 'tutor', // Replace with your existing schema type "tutor"
                mock_video: data,
                videoField: {
                  _type: 'mux.video',
                  assetDocument: {
                    _type: 'mux.asset',
                    assetId: video,
                  },
                },
                // Map the data fields to the corresponding fields in your "tutor" schema
                // Spread the tutorData object to include all fields
              },
            },
          ],
        }),
      }
    );

    if (response.ok) {
      console.log('Data posted successfully!');
    } else {
      console.error('Error posting data:', response.statusText);
    }
  } catch (error) {
    console.error('Error posting data:', error);
  }
}
export default uploadVideoToSanity;
