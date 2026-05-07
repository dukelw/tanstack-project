import { createFileRoute, useNavigate } from "@tanstack/react-router";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

export const Route = createFileRoute("/(public)/users/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: typeof search.q === "string" ? search.q : "",
    };
  },

  loaderDeps: ({ search }) => ({
    q: search.q,
  }),

  loader: async ({ deps }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(deps.q.toLowerCase()),
    );

    return {
      users: filteredUsers,
    };
  },

  pendingComponent: () => (
    <div className="text-slate-400">Loading users...</div>
  ),

  errorComponent: () => (
    <div className="text-red-400">Failed to load users</div>
  ),

  component: UsersPage,
});

function UsersPage() {
  const navigate = useNavigate();

  const search = Route.useSearch();

  const { users } = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Users API Search</h1>

        <p className="text-slate-400">TanStack Router Loader + Search Params</p>
      </div>

      <input
        value={search.q}
        onChange={(e) => {
          navigate({
            to: "/users",

            search: {
              q: e.target.value,
            },

            replace: true,
          });
        }}
        placeholder="Search users..."
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/30
          placeholder:text-slate-500
        "
      />

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
            "
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>

            <p className="text-slate-400">{user.email}</p>

            <p className="mt-2 text-sm text-blue-400">{user.company.name}</p>
          </div>
        ))}

        {users.length === 0 && (
          <div className="text-slate-400">No users found</div>
        )}
      </div>
    </div>
  );
}
