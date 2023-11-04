import { Metadata } from "next";
import PageContent from "@/modules/users/page-content";

export const metadata: Metadata = {
  title: "Users",
};

export default function Page() {
  return (
    <main className="container pt-6 pb-12">
      <h1 className="text-2xl text-gray-800 font-semibold mb-6">Users</h1>
      <PageContent />
    </main>
  );
}
