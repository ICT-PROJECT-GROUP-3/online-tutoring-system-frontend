// pages/api/uploadVideo.js
import axios from 'axios';
import { createReadStream } from 'fs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Mux Video API credentials
  const MUX_API_TOKEN = process.env.MUX_TOKEN_ID;
  const MUX_API_SECRET = process.env.MUX_TOKEN_SECRET;

  try {
    // Step 1: Get an upload URL from Mux
    console.log('1.......');
    const {
      data: { url },
    } = await axios.post(
      'https://api.mux.com/video/uploads',
      {
        cors_origin: '*',
        new_asset_settings: {
          playback_policy: 'public',
          passthrough: 'your-custom-data',
        },
      },
      {
        auth: {
          username: MUX_API_TOKEN,
          password: MUX_API_SECRET,
        },
      }
    );

    // Step 2: Upload the video file to Mux
    console.log('2....');
    const {
      data: { assetId },
    } = await axios.put(url, createReadStream(req.body.path), {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    // Step 3: Wait for the video to be processed
    console.log('3....');
    let status = 'preparing';
    while (status !== 'ready') {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      let {
        data: {
          data: { status },
        },
      } = await axios.get(`https://api.mux.com/video/assets/${assetId}`, {
        auth: {
          username: MUX_API_TOKEN,
          password: MUX_API_SECRET,
        },
      });
      status;
    }

    // Step 4: Retrieve the Mux URL of the converted video
    console.log('4.....');
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

    // Step 5: Return the Mux URL as the response
    console.log('5........');
    res.status(200).json({ muxURL });
  } catch (error) {
    console.error('Error uploading video:', error.message);
    res.status(500).json({ error: 'Video upload failed' });
  }
}
