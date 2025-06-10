import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const logoutUrl =
    `${process.env.AUTH0_ISSUER}/v2/logout` +
    `?client_id=${process.env.AUTH0_CLIENT_ID}` +
    `&returnTo=${process.env.NEXTAUTH_URL}`;

  return NextResponse.redirect(logoutUrl);
}
