export const todoKeys = {
  all: ["todos"] as const,

  detail: (id: number) => [...todoKeys.all, id] as const,
};
