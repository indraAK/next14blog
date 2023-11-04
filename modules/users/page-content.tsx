"use client";

import { fetchFilteredUsers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Table from "@/modules/users/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UsersTableSkeleton } from "@/components/skeletons";
import Search from "./search";
import { useSearchParams } from "next/navigation";

export default function PageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const {
    data: users,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchFilteredUsers(query),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <div className="flex justify-between gap-4">
        <Search placeholder="Search users by name..." />
        <Button asChild>
          <Link href="/users/create">Add New</Link>
        </Button>
      </div>
      {isPending ? <UsersTableSkeleton /> : isError ? <p>Error: {error.message}</p> : <Table data={users} />}
    </>
  );
}
