import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTodo, type Todo } from "../service/todoService";

import { todoKeys } from "../queries/todoKeys";

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
