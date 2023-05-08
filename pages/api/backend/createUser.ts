// import prisma from "../../../lib/prisma";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password, type } = req.body;

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
          type,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     // Do post stuff
//     const { name, email, password, type } = req.body;
//     const user = {
//       name,
//       email,
//       password,
//       type,
//     };
//     try {
//       const createdUser = await prisma.user.create({
//         data: user,
//       });
//       res.status(200).json(createdUser);
//       console.log(createdUser);
//     } catch (e) {
//       res.status(500).json({ error: 'Unable to create user.' });
//       console.log(res.status(500));
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

// const handler = async (req, res) => {
//   // const { token: { accessToken, email },
//   // } = await getSession({ req });

//   if (req.method === 'POST') {
//     // Do post stuff
//     const { body } = req;
//     const { name, email, password, type } = JSON.parse(body);
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       type: type,
//     };
//     const createUser = await prisma.user.create({
//       data: user,
//     });
//     return res.status(200).json(createUser);
//   }
//   // else if (req.method === 'GET') {
//   //   const response = await getUsersPlaylists(accessToken);
//   //   const { user } = await response.json();
//   //   return res.status(200).json({ user });
//   // }
//   res.end();
// };

// export default handler;
//   async function handleSubmit() {
//     // const hashedPassword = ;
//     const user = await prisma.user.create({
//       data: {
//         name: name,
//         email: email,
//         password: password,
//         type: type,
//       },
//     });

//     console.log({ user });
//   }
//   handleSubmit()
//     .then(() => prisma.$disconnect())
//     .catch(async (e) => {
//       console.error(e);
//       await prisma.$disconnect();
//       process.exit(1);
//     });
//   return prisma;
