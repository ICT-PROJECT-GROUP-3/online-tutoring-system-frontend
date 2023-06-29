export default async function TutorContextApi(req, res) {
  const tutorSessionData = localStorage.getItem('tutorSession');
  const tutorData = JSON.parse(tutorSessionData);
  const id = tutorData?._id;

  console.log('THE TUTOR DATA IS:', tutorData);
  console.log('The tutor session id is:', id);

  // const id = tutor['0']?._id;
  console.log('The tutor session id is:' + id);
  const sanityApiKey =
    'skHK4SXyIt4zKcU6X6OIOaG2Zsb2ZYMvQk3oCMakw6KutBjRDje8EtUZVcDpIBSiGbF3cH26h46T9oH6GWg0VH6eDCHDg6uUX669PviEvtqfwTdrE4W7PuB00Mc6aWVq8S3up1LqUPkTeZOmVrtBX6yduClsbvwAceBJQTtRKzpnVZ5FGMuK';
  const sanityProjectId = '3iouolde';
  const sanityDataset = 'production';

  try {
    const response = await fetch(
      `https://${sanityProjectId}.api.sanity.io/v1/data/query/${sanityDataset}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sanityApiKey}`,
        },
        body: JSON.stringify({
          query:
            '*[_type == "session" && tutor._ref == $id ].student[]{first_name, last_name}',
          params: {
            id: id,
          },
        }),
      }
    );

    if (response.ok) {
      const students = await response.json();
      console.log('success!', students);
      res.status(200).json(students);
    } else {
      console.error('Error posting data:', response.statusText);
      res.status(500).json({ error: 'Error posting data' });
    }
  } catch (error) {
    console.error('Error posting data:', error);
    res.status(500).json({ error: 'Error posting data' });
  }
}
