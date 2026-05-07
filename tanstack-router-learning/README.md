# TanStack Router Loader & Search Params

This page demonstrates how TanStack Router handles:

- URL search params
- Type-safe validation
- Route loaders
- External API fetching
- Pending/loading states

---

## Search Params

The page uses URL-based search params.

Example:

```
/users?q=john
```

The URL becomes the single source of truth. This allows:

- Shareable URLs
- Browser back/forward support
- Persistent search state
- Deep linking

### `validateSearch`

TanStack Router provides `validateSearch()` to parse and validate search params.

```tsx
validateSearch: (search) => {
  return {
    q: typeof search.q === "string" ? search.q : "",
  };
};
```

This function:

- Validates incoming query params
- Transforms values
- Provides fallback defaults
- Creates fully typed search params

After validation:

```tsx
const search = Route.useSearch();
```

becomes type-safe.

```tsx
search.q; // string
```

instead of:

```tsx
// unknown
```

### `loaderDeps`

`loaderDeps()` tells TanStack Router when the loader should rerun.

```tsx
loaderDeps: ({ search }) => ({
  q: search.q,
});
```

When `q` changes:

```
URL changes → loader reruns → data refreshes
```

## Route Loader

The route uses `loader()` to fetch external API data.

```tsx
loader: async ({ deps }) => {
  const response = await fetch(...);
  return data;
};
```

Unlike `useEffect`, loaders run **before** rendering the page.

Flow:

```
Navigate to route → Loader runs → Data fetched → Component renders
```

Benefits:

- Cleaner architecture
- Better SSR support
- Easier prefetching
- Centralized data loading

### Pending Component

While the loader is fetching data, `pendingComponent` is displayed automatically.

```tsx
pendingComponent: () => <div>Loading...</div>;
```

## External API Example

This demo fetches users from:

```
https://jsonplaceholder.typicode.com/users
```

and filters them based on the search query.

## Why This Is Powerful

TanStack Router combines:

- Routing
- Search params
- Validation
- Data loading

into a single route-based system. This creates a cleaner and more scalable architecture compared to `useEffect` + `useState` + `react-router`.

## Production Setup

In real applications, loaders are commonly combined with:

- TanStack Query
- Zod
- Server-side rendering
- Prefetching
- Streaming

Example:

```tsx
queryClient.ensureQueryData();
```

for caching and background refetching.
