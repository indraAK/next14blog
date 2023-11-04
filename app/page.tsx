import PostList from "@/modules/posts/post-list";

export default async function Home() {
  return (
    <main className="container py-8">
      <h1 className="text-2xl text-gray-800 font-semibold mb-6">All posts</h1>
      <PostList />
    </main>
  );
}
