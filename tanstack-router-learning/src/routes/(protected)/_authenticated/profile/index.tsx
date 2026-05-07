import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_authenticated/profile/")({
  component: ProfilePage,
});

function ProfilePage() {
  return <h1>Profile Page</h1>;
}
