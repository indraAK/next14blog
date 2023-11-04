"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/lib/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import type { UserForm } from "@/lib/types";

export default function CreateForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<UserForm>();
  const onSubmit: SubmitHandler<UserForm> = (data) => {
    mutateCreateUser(data);
  };

  const { mutate: mutateCreateUser, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User Successfully created");
      reset();
    },
    onError: () => {
      toast.error("Failed to create user");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      router.replace("/users");
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 pb-7 rounded-md space-y-5 max-w-md mx-auto">
      <fieldset className="space-y-2">
        <label htmlFor="name" className="text-sm text-gray-800 font-medium">
          Name
        </label>
        <Input {...register("name")} required placeholder="Enter your name" id="name" />
      </fieldset>
      <fieldset className="space-y-2">
        <label htmlFor="email" className="text-sm text-gray-800 font-medium">
          Email
        </label>
        <Input {...register("email")} required placeholder="Enter your email" id="email" />
      </fieldset>
      <fieldset className="grid grid-cols-4">
        <label htmlFor="gender" className="text-sm text-gray-800 font-medium">
          Gender:
        </label>
        <div className="col-span-3 space-y-2">
          <label className="flex items-center gap-x-2">
            <input type="radio" {...register("gender")} id="male" value="male" className="inline-block w-4 h-4" />
            <span className="text-sm text-gray-800">Male</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input type="radio" {...register("gender")} id="female" value="female" className="inline-block w-4 h-4" />
            <span className="text-sm text-gray-800">Female</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="grid grid-cols-4">
        <label htmlFor="status" className="text-sm text-gray-800 font-medium">
          Status:
        </label>
        <div className="col-span-3 space-y-2">
          <label className="flex items-center gap-x-2">
            <input type="radio" {...register("status")} id="active" value="active" className="inline-block w-4 h-4" />
            <span className="text-sm text-gray-800">Active</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input type="radio" {...register("status")} id="inactive" value="inactive" className="inline-block w-4 h-4" />
            <span className="text-sm text-gray-800">Inactive</span>
          </label>
        </div>
      </fieldset>
      <div className="flex justify-end gap-x-4 pt-5">
        <Button asChild variant="secondary">
          <Link href="/users">Cancel</Link>
        </Button>
        <Button type="submit" disabled={isSubmitting || isPending}>
          Create User
        </Button>
      </div>
    </form>
  );
}
