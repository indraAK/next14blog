"use client";

import { Trash, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/lib/api";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Table({ data }: { data: User[] }) {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("User Successfully deleted");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className="mt-6 rounded-lg bg-gray-100 p-2 pt-0 overflow-x-auto">
      <table className="min-w-full text-gray-900">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Name
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Gender
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((user) => (
            <tr
              key={user.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">{user.name}</td>
              <td className="whitespace-nowrap p-3">{user.email}</td>
              <td className="whitespace-nowrap p-3">{user.gender}</td>
              <td className="whitespace-nowrap p-3">{user.status}</td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end items-center gap-3">
                  <Button asChild variant="outline" aria-label="Edit user" className="p-2 w-8 h-8">
                    <Link href={`/users/${user.id}/edit`}>
                      <Pencil className="w-5 h-5 text-gray-700" />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => {
                      if (confirm("Are you sure?")) mutateDeleteUser(user.id);
                    }}
                    variant="outline"
                    aria-label="Delete user"
                    className="p-2 w-8 h-8"
                  >
                    <Trash className="w-5 h-5 text-gray-700" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
