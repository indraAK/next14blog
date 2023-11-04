import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchPost, fetchUser, fetchCommentsByPostId } from "@/lib/api";
import CommentList from "@/modules/posts/comment-list";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.id;
  // fetch data
  const post = await fetchPost(id);
  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);
  const userInfo = await fetchUser(post.user_id);
  const comments = await fetchCommentsByPostId(post.id);

  return (
    <main className="max-w-3xl mx-auto pt-5 pb-8">
      <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
        <ArrowLeft className="mr-1 w-4 h-4" /> Back to Blog
      </Link>
      <article className="mt-8">
        <h1 className="text-gray-900 text-4xl leading-tight font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-2">
          Posted by <span className="text-gray-700 font-semibold">{userInfo?.name ?? "Unknown"}</span>
        </p>
        <p className="text-gray-700 leading-relaxed mt-6">{post.body}</p>
      </article>
      <section className="mt-12">
        <h3 className="text-gray-800 text-lg tracking-wide mb-4">Comments ({comments.length})</h3>
        {/* @ts-ignore */}
        {comments.length > 0 ? <CommentList comments={comments} /> : <p className="text-sm text-gray-500">No comments yet</p>}
      </section>
    </main>
  );
}
