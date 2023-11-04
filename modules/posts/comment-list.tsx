import type { Comment } from "@/lib/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback className="bg-gray-200">
              <User className="fill-gray-400 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div>
            <span className="text-gray-900 font-medium">{comment.name}</span>
            <p className="text-sm text-gray-700 mt-1">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
