import { useState } from "react";
import { useTodosQuery } from "./queries/useTodosQuery";
import { useCreateTodoMutation } from "./mutations/useCreateTodoMutation";
import { useDeleteTodoMutation } from "./mutations/useDeleteTodoMutation";

export default function TodosPage() {
  const [title, setTitle] = useState("");
  const { data, isLoading } = useTodosQuery();
  const createMutation = useCreateTodoMutation();
  const deleteMutation = useDeleteTodoMutation();

  if (isLoading) {
    return <div className="text-slate-400">Loading todos...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Todo CRUD</h1>

        <p className="text-slate-400">Full TanStack Query Example</p>
      </div>

      <div className="flex gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo..."
          className="
            flex-1
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            focus:border-blue-500
          "
        />

        <button
          onClick={() => {
            if (!title.trim()) return;

            createMutation.mutate(title);

            setTitle("");
          }}
          className="
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-violet-500
            px-5
            py-3
            font-semibold
            text-white
          "
        >
          Add
        </button>
      </div>

      <div className="grid gap-4">
        {data?.map((todo) => (
          <div
            key={todo.id}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <div>
              <h2 className="font-semibold">{todo.title}</h2>

              <p className="text-sm text-slate-400">ID: {todo.id}</p>
            </div>

            <button
              onClick={() => deleteMutation.mutate(todo.id)}
              className="
                rounded-lg
                bg-red-500/20
                px-4
                py-2
                text-red-300
              "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
