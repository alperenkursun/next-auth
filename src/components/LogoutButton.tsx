"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/api/auth/logout",
        })
      }
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-5"
    >
      Çıkış Yap
    </button>
  );
}
