import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTodo, type Todo } from "../todoApi";

import { todoKeys } from "../todoKeys";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Todo[]>(todoKeys.all, (old = []) =>
        old.filter((todo) => todo.id !== deletedId),
      );
    },
  });
}
