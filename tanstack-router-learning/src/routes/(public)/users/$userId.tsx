import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/users/$userId")({
  component: UserDetailPage,
});

function UserDetailPage() {
  const { userId } = Route.useParams();

  return <div>User ID: {userId}</div>;
}
