export function PostCardSkeleton() {
  return (
    <div className="shimmer relative overflow-hidden bg-gray-100 rounded-lg p-5 shadow-post-card">
      <div className="flex flex-col gap-5 min-h-[120px]">
        <div className="w-[85%] h-3 bg-gray-200 rounded-md"></div>
        <div className="space-y-2 flex-1">
          <div className="w-[80%] h-3 bg-gray-200 rounded-md"></div>
          <div className="w-[50%] h-3 bg-gray-200 rounded-md"></div>
        </div>
        <div className="w-[25%] h-3 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}

export function PostListSkeleton({ length = 1 }: { length: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Name  */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap p-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* gender */}
      <td className="whitespace-nowrap p-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* status */}
      <td className="whitespace-nowrap p-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function UsersTableSkeleton() {
  return (
    <div className="mt-6 rounded-lg bg-gray-100 p-2 pt-0 overflow-x-auto">
      <table className="hidden min-w-full text-gray-900 md:table">
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
            <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
        </tbody>
      </table>
    </div>
  );
}
