import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Custom middleware logic can be added here
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/((?!login|register|api/auth|api/register).*)'],
};