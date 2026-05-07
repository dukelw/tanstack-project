import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/")({
  component: Hello,
});

function Hello() {
  return <h1>Hello, authenticated user!</h1>;
}
