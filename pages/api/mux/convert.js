// pages/api/convert.js

import formidable from 'formidable';
import mux from '@mux/mux-node';
// import sanityClient from '@sanity/client';

export const config = {
  api: {
    bodyParser: false,
  },
};

const muxAccessToken = process.env.MUX_TOKEN_ID;
const muxSecretKey = process.env.MUX_TOKEN_SECRET;
// const sanityToken = 'YOUR_SANITY_TOKEN';

// const sanity = sanityClient({
//   projectId: 'YOUR_SANITY_PROJECT_ID',
//   dataset: 'YOUR_SANITY_DATASET',
//   token: sanityToken,
//   useCdn: false,
// });

export default async function handler(req, res) {
  // Parse form data
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to parse form data' });
      return;
    }

    try {
      // Create Mux Asset
      mux.configure({
        accessToken: muxAccessToken,
        secretKey: muxSecretKey,
      });

      const asset = await mux.Video.Assets.create({
        input: files.file.path, // Assuming the input file field name is "file"
      });

      // Get the Mux Playback ID
      const playbackId = asset.playback_ids[0].id;

      // Get the Mux Asset URL
      const playbackUrl = mux.Video.Assets.playbackUrl(playbackId);
      console.log(playbackUrl);
      // Save the Asset URL to Sanity.io
    //   const sanityDocument = {
    //     _type: 'video', // Change this to the appropriate Sanity.io schema type
    //     title: 'My Converted Video',
    //     assetUrl: playbackUrl,
    //   };

    //   await sanity.create(sanityDocument);

      // Send the playbackId in the response
      res.status(200).json({ playbackId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to convert file' });
    }
  });
}
