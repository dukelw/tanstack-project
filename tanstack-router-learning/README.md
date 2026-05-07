# TanStack Query CRUD Example

This project demonstrates a scalable CRUD architecture using:

- TanStack Router
- TanStack Query
- Feature-based folder structure
- Mutations & cache updates
- Query keys
- Protected routes

---

## Todo CRUD

The app includes a Todo CRUD page with:

- Fetch todos
- Create todo
- Delete todo
- Local cache updates
- Protected route access

Route:

```
/todos
```

## Architecture

The project separates:

- Routing
- UI
- API logic
- Query logic
- Mutation logic

This creates a cleaner and more scalable structure.

### Folder Structure

```
src/
├── routes/
│   └── (protected)/
│       └── _authenticated/
│           └── todos.tsx
│
├── features/
│   └── todos/
│       ├── api/
│       ├── queries/
│       ├── mutations/
│       └── todoKeys.ts
```

## Why Routes Stay Inside `routes/`

TanStack Router uses file-based routing. Only files inside `src/routes` are converted into application routes.

Example:

```
routes/_authenticated/todos.tsx → /todos
```

If a route file is placed inside `features/todos/`, it will **not** be registered as a route.

## Feature-Based Architecture

Business logic is organized by feature/domain.

```
features/
├── todos/
├── auth/
├── users/
```

Each feature manages its own:

- API calls
- Queries
- Mutations
- Types
- Components

This structure scales much better for large applications.

### Query Separation

Queries are separated into dedicated hooks.

```tsx
useTodosQuery();
```

- **Location:** `features/todos/queries/`
- **Purpose:** Fetch server state, cache data, handle loading states

### Mutation Separation

Mutations are separated from UI components.

```tsx
useCreateTodoMutation();
useDeleteTodoMutation();
```

- **Location:** `features/todos/mutations/`
- **Purpose:** Create/update/delete server state, update query cache, encapsulate mutation logic

## Query Keys

TanStack Query caches data using query keys.

```tsx
["todos"];
```

Defined in `todoKeys.ts`. This allows:

- Cache sharing
- Automatic refetching
- Query invalidation
- Type-safe cache access

## Cache Updates

After mutations succeed, the cache is updated manually.

```tsx
queryClient.setQueryData();
```

Benefits:

- Instant UI updates
- No extra refetch
- Better UX

## Protected Route

The Todo page is protected using `_authenticated.tsx`. Authentication is checked inside `beforeLoad()`. Unauthenticated users are redirected to `/login`.

## Why This Architecture Is Scalable

This structure keeps:

- Pages clean
- Business logic isolated
- Server state centralized
- Features modular

It becomes much easier to maintain as the application grows.

## Tech Stack

- React
- TypeScript
- TanStack Router
- TanStack Query
- TailwindCSS
- Vite
