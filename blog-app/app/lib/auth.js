import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from './db';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
          if (rows.length === 0) {
            return null;
          }
          const user = rows[0];
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            return null;
          }
          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);