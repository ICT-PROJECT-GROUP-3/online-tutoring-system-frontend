import { User } from './interfaces';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}
