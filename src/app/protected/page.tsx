import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Kullanıcı</h1>
      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(session, null, 2)}
      </pre>
      <div className="mt-6">
        <a
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4"
          href="/api/auth/logout"
        >
          Çıkış Yap
        </a>
      </div>
    </div>
  );
}
