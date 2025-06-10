import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session, Account } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: Account | null }) {
      if (account?.id_token) {
        try {
          const idToken = JSON.parse(
            Buffer.from(account.id_token.split(".")[1], "base64").toString()
          );

          const roles = idToken["https://yourapp.com/claims/roles"];
          if (roles) {
            token.roles = roles;
          }
        } catch (error) {
          console.error("Error parsing ID token:", error);
        }
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.roles && session.user) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
