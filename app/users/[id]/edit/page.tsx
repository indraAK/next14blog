import { Metadata } from "next";
import { fetchUser } from "@/lib/api";
import EditForm from "@/modules/users/edit-form";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit user",
};

export default async function Page({ params }: { params: { id: string } }) {
  const user = await fetchUser(Number(params.id));
  if (!user) notFound();

  return (
    <main className="container py-6">
      <h1 className="text-2xl text-gray-800 font-semibold mb-6 text-center">Edit User</h1>
      <EditForm user={user} />
    </main>
  );
}
