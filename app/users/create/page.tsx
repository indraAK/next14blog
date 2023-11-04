import CreateForm from "@/modules/users/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create user",
};

export default function Page() {
  return (
    <main className="container py-6">
      <h1 className="text-2xl text-gray-800 font-semibold mb-6 text-center">Create User</h1>
      <CreateForm />
    </main>
  );
}
