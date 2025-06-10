import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Kimlik Doğrulama Uygulaması",
  description:
    "Auth0 ve NextAuth.js ile geliştirilen, JWT tabanlı güvenli kimlik doğrulama ve yetkilendirme sistemi. Oturum yönetimi ve sayfa erişim kısıtlamaları sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
