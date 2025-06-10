import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Korumalı Sayfa</h1>

      <div className="mt-4">
        <p className="text-lg capitalize">
          <strong>Rol:</strong>{" "}
          {session.user?.roles?.length
            ? session.user.roles.join(", ")
            : "Belirtilmemiş"}
        </p>
      </div>

      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(session, null, 2)}
      </pre>

      <LogoutButton />
    </div>
  );
}
