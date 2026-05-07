export function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl bg-white/5 p-5">
        <h1 className="text-2xl font-bold">Protected Area</h1>
      </header>

      {children}
    </div>
  );
}
