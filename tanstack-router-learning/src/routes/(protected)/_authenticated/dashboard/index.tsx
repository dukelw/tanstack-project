import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_authenticated/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return <h1>Dashboard, authenticated user!</h1>;
}
