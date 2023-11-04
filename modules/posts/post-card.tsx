import Link from "next/link";
import { Post } from "@/lib/types";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <>
      <div className="grid bg-white rounded-lg p-5 shadow-post-card pointer-events-none [&>*]:[grid-area:1/1]">
        <Link href={`/blog/${post.id}`} className="block pointer-events-auto">
          &nbsp;
        </Link>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-gray-800 font-medium leading-tight">{post.title}</h2>
          <p className="text-gray-500 text-sm flex-1">{post.body.substring(0, 100) + "..."}</p>
          <Link href={`/blog/${post.id}`} className="text-sm text-blue-500 font-medium">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
