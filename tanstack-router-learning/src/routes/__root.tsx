import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_55%)]
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav
          className="
            mb-8
            flex
            flex-wrap
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            backdrop-blur-xl
            shadow-2xl
          "
        >
          <NavItem to="/">Home</NavItem>

          <NavItem to="/dashboard">Dashboard</NavItem>

          <NavItem to="/users">Users</NavItem>

          <NavItem to="/profile">Profile</NavItem>

          <NavItem to="/todos">Todos</NavItem>

          <NavItem to="/login">Login</NavItem>
        </nav>

        <main
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            shadow-2xl
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavItem({ to, children }: NavItemProps) {
  return (
    <Link
      to={to}
      activeProps={{
        className: "bg-gradient-to-r from-blue-500 to-violet-500 text-white",
      }}
      className="
        rounded-xl
        px-4
        py-2
        text-slate-300
        transition-all
        duration-200
        hover:bg-white/10
        hover:text-white
        active:scale-95
      "
    >
      {children}
    </Link>
  );
}
