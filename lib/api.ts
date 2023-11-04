import { Post, User } from "./types";

export const fetchPostsWithPagination = async (page = 1, limit = 20): Promise<Post[]> => {
  const res = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=${limit}`);
  return res.json();
};

export const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const fetchUser = async (id: number): Promise<User | undefined> => {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
  if (!res.ok) return undefined;
  return res.json();
};

export const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
  if (!res.ok) undefined;
  return res.json();
};

export const fetchFilteredUsers = async (query: string): Promise<User[]> => {
  const res = await fetch(`https://gorest.co.in/public/v2/users?page=0&per_page=10&name=${query}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const deleteUser = async (userId: number) => {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer 97f2800593baca9fd47c53856387c1f9fb9e36874350c137929899ac9e812eb1",
    },
  });
  if (!res.ok) throw new Error("Failed to delete data");
  return res;
};

export const createUser = async (data: Omit<User, "id">) => {
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 97f2800593baca9fd47c53856387c1f9fb9e36874350c137929899ac9e812eb1",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res;
};

export const updateUser = async (userId: number, data: Omit<User, "id">) => {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 97f2800593baca9fd47c53856387c1f9fb9e36874350c137929899ac9e812eb1",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res;
};
