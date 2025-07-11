import Auth0Provider from "next-auth/providers/auth0";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        try {
          const idToken = JSON.parse(
            Buffer.from(account.id_token.split(".")[1], "base64").toString()
          );
          const roles = idToken["https://yourapp.com/claims/roles"];
          if (roles) token.roles = roles;
        } catch (error) {
          console.error("Error parsing ID token:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.roles && session.user) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
};
