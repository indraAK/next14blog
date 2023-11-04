"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import PostCard from "./post-card";
import React from "react";
import { Button } from "@/components/ui/button";
import { fetchPostsWithPagination } from "@/lib/api";
import { PostListSkeleton } from "@/components/skeletons";

const POSTS_PER_PAGE = 20;

export default function PostList() {
  const { data, error, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => fetchPostsWithPagination(pageParam, POSTS_PER_PAGE),
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return (
    <>
      {status === "pending" ? (
        <PostListSkeleton length={9} />
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-dense">
            {data?.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </React.Fragment>
            ))}
          </div>
          {hasNextPage && (
            <div className="mt-10 text-center">
              <Button variant="outline" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                {isFetchingNextPage ? "Loading more..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
