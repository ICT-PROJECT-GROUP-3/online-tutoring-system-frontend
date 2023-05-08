// import {
//   getRefreshedTokenPair,
//   loginOrRegisterUser,
// } from '../../../services/auth';

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        const type = (credentials as any).type;

        // const data = await loginOrRegisterUser(
        //   type,
        //   credentials?.email,
        //   credentials?.password
        // );

        // if (data)
        //   return {
        //     ...data,
        //     accessTokenExpires: Date.now() + tokenExpiration * 1000,
        //   };

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account!.expires_at! * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      // if (Date.now() <  token.accessTokenExpires!) {
      //   return token
      // }

      // Access token has expired, try to update it
      // return getRefreshedTokenPair(token);
    },
  },
});
