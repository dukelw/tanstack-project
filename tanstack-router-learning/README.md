# TanStack Router Authentication Example

This project demonstrates how to implement protected routes using:

- [TanStack Router](https://tanstack.com/router)
- React Context API
- Route Guards (`beforeLoad`)
- Pathless Layout Routes (`_authenticated`)
- TailwindCSS UI

---

## Authentication Architecture

The authentication flow is separated into 2 parts:

### 1. Auth Context

Authentication state is managed outside the router using React Context.

```tsx
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
```

The auth context provides:

- `isAuthenticated`
- `login()`
- `logout()`

This keeps authentication reactive and globally accessible.

### 2. Protected Routes with `_authenticated`

TanStack Router supports pathless layout routes using `_`.

Example structure:

```
routes/
├── _authenticated.tsx
├── _authenticated/
│   ├── profile.tsx
│   └── dashboard.tsx
```

Routes inside `_authenticated/` are automatically protected. The URL does **not** contain `_authenticated`.

Example:

```
_authenticated/profile.tsx → /profile
```

### Route Guard

Authentication is checked using `beforeLoad()`.

```tsx
beforeLoad: ({ context }) => {
  if (!context.auth.isAuthenticated) {
    throw redirect({
      to: "/login",
    });
  }
};
```

If the user is not logged in:

```
/profile → redirect to /login
```

### Router Context Injection

Auth state is injected into TanStack Router context.

```tsx
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});
```

Then passed into `RouterProvider`:

```tsx
<RouterProvider router={router} context={{ auth }} />
```

This allows all routes to access auth state safely.

### Benefits of This Approach

- Clean architecture
- Centralized authentication
- Reusable route protection
- Type-safe auth context
- Easy to scale

Works well with:

- JWT
- Cookies
- Zustand / Redux
- React Query

### UI

The UI uses:

- TailwindCSS
- Dark modern dashboard style
- Glassmorphism effects
- Responsive navigation

### Example Protected Pages

- `/profile`
- `/dashboard`
- `/settings`

All protected automatically through `_authenticated`.

## Tech Stack

- React
- TypeScript
- TanStack Router
- TailwindCSS
- Vite
