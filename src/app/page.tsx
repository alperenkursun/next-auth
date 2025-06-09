import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AuthOButton from "@/components/AuthOButton";
export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/protected");
  }

  return (
    <div className="h-[100vh] bg-[#e0f2f7] p-[50px] flex flex-col items-center">
      <h1 className="font-bold text-[24px]">Kullanıcı Girişi</h1>
      <AuthOButton />
    </div>
  );
}
