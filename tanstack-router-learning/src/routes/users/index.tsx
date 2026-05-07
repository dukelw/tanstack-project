import { createFileRoute, Link } from "@tanstack/react-router";

const users = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Jane",
  },
];

export const Route = createFileRoute("/users/")({
  component: UsersPage,
});

function UsersPage() {
  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link
            to="/users/$userId"
            params={{
              userId: user.id,
            }}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
