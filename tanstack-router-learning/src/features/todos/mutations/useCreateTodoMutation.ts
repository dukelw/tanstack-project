import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTodo, type Todo } from "../service/todoService";

import { todoKeys } from "../queries/todoKeys";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,

    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(todoKeys.all, (old = []) => [
        {
          id: Date.now(),
          title: newTodo.title,
        },
        ...old,
      ]);
    },
  });
}
