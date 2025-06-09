import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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
      <h1 className="text-2xl font-bold">Kullanıcı</h1>
      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(session, null, 2)}
      </pre>
      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
}
