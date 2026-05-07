export type Todo = {
  id: number;
  title: string;
};

const API = "https://jsonplaceholder.typicode.com/todos";

export async function getTodos() {
  const response = await fetch(`${API}?_limit=5`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export async function createTodo(title: string) {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title,
      completed: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
}

export async function deleteTodo(id: number) {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  return true;
}
