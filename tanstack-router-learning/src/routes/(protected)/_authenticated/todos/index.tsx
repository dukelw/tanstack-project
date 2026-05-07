import { createFileRoute } from "@tanstack/react-router";
import TodosPage from "../../../../features/todos";

export const Route = createFileRoute("/(protected)/_authenticated/todos/")({
  component: Todos,
});

function Todos() {
  return <TodosPage />;
}
