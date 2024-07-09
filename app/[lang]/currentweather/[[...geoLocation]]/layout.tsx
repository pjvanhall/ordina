export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start font-mono text-sm">
      {children}
    </main>
  );
}
