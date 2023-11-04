import Link from "next/link";
import { Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="absolute inset-0 container flex flex-col items-center justify-center gap-2">
      <Frown className="w-14 h-14 text-gray-400" />
      <h2 className="text-xl font-semibold text-gray-800">404 Not Found</h2>
      <p className="text-gray-700">Could not find requested resource.</p>
      <Button asChild className="mt-4">
        <Link href="/users">Go Back</Link>
      </Button>
    </main>
  );
}
