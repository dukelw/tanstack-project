import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { AuthenticatedLayout } from "../../layouts/AuthenticatedLayout";

export const Route = createFileRoute("/(protected)/_authenticated")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },

  component: AuthenticatedWrapper,
});

function AuthenticatedWrapper() {
  return (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  );
}
