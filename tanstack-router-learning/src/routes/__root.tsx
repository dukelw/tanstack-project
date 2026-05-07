import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/hello">Hello</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
