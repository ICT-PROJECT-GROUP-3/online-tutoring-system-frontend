// pages/api/getMuxURL.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Mux Video API credentials
  const MUX_API_TOKEN = process.env.MUX_TOKEN_ID;
  const MUX_API_SECRET = process.env.MUX_TOKEN_SECRET;

  try {
    const { assetId } = req.body;

    // Step 1: Retrieve the Mux URL of the converted video
    const {
      data: {
        data: { playback_ids },
      },
    } = await axios.get(
      `https://api.mux.com/video/assets/${assetId}/playback-ids`,
      {
        auth: {
          username: MUX_API_TOKEN,
          password: MUX_API_SECRET,
        },
      }
    );
    const muxURL = playback_ids[0].url;

    // Step 2: Return the Mux URL as the response
    res.status(200).json({ muxURL });
  } catch (error) {
    console.error('Error retrieving Mux URL:', error.message);
    res.status(500).json({ error: 'Failed to retrieve Mux URL' });
  }
}
