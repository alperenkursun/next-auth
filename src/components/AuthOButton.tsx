"use client";
import { signIn } from "next-auth/react";

function AuthOButton() {
  return (
    <button
      onClick={() => signIn("auth0", { callbackUrl: "/protected" })}
      className="h-9 w-64 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
    >
      Auth0 ile Giriş Yap
    </button>
  );
}

export default AuthOButton;
